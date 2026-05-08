/**
 * 朱印 ─ Stripe Webhook ハンドラ
 *
 * POST /api/webhook
 *
 * Stripe ダッシュボードで以下を設定：
 *   Endpoint URL: https://shuin.jp/api/webhook
 *   Listen events: checkout.session.completed, payment_intent.payment_failed
 *
 * 決済完了 → 在庫カウント増 → 朱印商人へ案内メール送信 → daiki へ通知
 */
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { incrementSold } from "@/lib/inventory";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[shuin/webhook] STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    console.error("[shuin/webhook] signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutComplete(event.data.object as Stripe.Checkout.Session);
        break;

      case "payment_intent.payment_failed":
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;

      default:
        console.log(`[shuin/webhook] unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[shuin/webhook] handler error:", error);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }
}

/**
 * 決済完了時の処理
 *  1. 在庫カウンタ +1
 *  2. 朱印商人へ案内メール送信（GitHub招待リンク、Calendly、朱印状PDF）
 *  3. daiki へ Slack/メール通知
 *  4. 朱印商人マスタにレコード追加（Phase 2 の Supabase で実装）
 */
async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const productNumber = Number(session.metadata?.product_number);
  const customerEmail = session.customer_details?.email ?? "unknown@unknown";

  if (!productNumber) {
    console.error("[shuin/webhook] missing product_number in metadata", session.id);
    return;
  }

  // 1. 在庫カウンタを増やす
  const result = await incrementSold({
    productNumber,
    stripeSessionId: session.id,
    customerEmail,
  });

  console.log(
    `[shuin/webhook] checkout completed: 朱印 第${productNumber}号, ${result.reservedSlot}/10 名目`
  );

  // 2. TODO(5/12 後): 朱印商人へ案内メール送信
  //    - GitHub プライベートリポジトリ招待リンク
  //    - Calendly URL（Zoomデプロイ伴走 30分予約）
  //    - 朱印状PDF（販売権授与証）
  //    - LINE 公式 友だち追加 URL
  //    - デプロイマニュアル + ビジネスサイクルマニュアル URL
  await sendShuinDeliveryEmail({
    email: customerEmail,
    productNumber,
    reservedSlot: result.reservedSlot,
    sessionId: session.id,
  });

  // 3. TODO(5/12 後): daiki への通知（Slack Webhook or Discord）
  await notifyDaiki({
    productNumber,
    customerEmail,
    soldCount: result.newSoldCount,
    sessionId: session.id,
  });
}

/**
 * 決済失敗時の処理
 */
async function handlePaymentFailed(intent: Stripe.PaymentIntent) {
  console.warn(
    `[shuin/webhook] payment failed: ${intent.id}, reason: ${intent.last_payment_error?.message}`
  );
  // 在庫カウンタは増やさない
  // 必要なら daiki に通知（決済失敗が頻発する場合のためのモニタリング）
}

/**
 * 朱印商人へ案内メール送信（スタブ）
 *
 * 5/12 開業届提出 + Stripe + 屋号メール（shuin.jp.official@gmail.com 経由 SendGrid 等）が
 * 揃ったら実装する。Phase 0 では console.log のみ。
 */
async function sendShuinDeliveryEmail(args: {
  email: string;
  productNumber: number;
  reservedSlot: number;
  sessionId: string;
}) {
  console.log(`[shuin/webhook] (stub) send delivery email to ${args.email}`, args);
  // TODO(5/12 後): SendGrid / Resend で実装
  // - 件名: 「朱印 第N号 ─ 朱印商人としてのご加入を歓迎します」
  // - 本文: 朱印状PDF添付、GitHub招待、Calendly URL、LINE案内
}

/**
 * daiki への通知（スタブ）
 */
async function notifyDaiki(args: {
  productNumber: number;
  customerEmail: string;
  soldCount: number;
  sessionId: string;
}) {
  console.log(`[shuin/webhook] (stub) notify daiki:`, args);
  // TODO(5/12 後): Slack Webhook or Discord で通知
}
