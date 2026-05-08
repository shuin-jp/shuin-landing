/**
 * 朱印 ─ Stripe Checkout Session 作成エンドポイント
 *
 * POST /api/checkout
 * Body: { productNumber: number }
 *
 * 在庫チェック → Stripe Checkout Session 作成 → URL を返却
 * 5/12 Stripe アカウント開設後、Stripe Price ID を src/lib/stripe.ts に追記して有効化。
 */
import { NextRequest, NextResponse } from "next/server";
import { createShuinCheckoutSession, SHUIN_PRODUCT_PRICES } from "@/lib/stripe";
import { getRemainingStock, isProductSoldOut } from "@/lib/inventory";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const productNumber = Number(body.productNumber);

    if (!productNumber || isNaN(productNumber)) {
      return NextResponse.json(
        { error: "productNumber が必要です" },
        { status: 400 }
      );
    }

    // 在庫チェック（10名上限）
    const remaining = await getRemainingStock(productNumber);
    if (isProductSoldOut(remaining)) {
      return NextResponse.json(
        { error: "この号は先着10名様の上限に達しました。次回ローンチをお待ちください。" },
        { status: 400 }
      );
    }

    // Stripe Price ID 取得
    const priceId = SHUIN_PRODUCT_PRICES[productNumber];
    if (!priceId) {
      return NextResponse.json(
        {
          error:
            "この号の Stripe Price ID が未設定です。daiki に連絡してください。",
        },
        { status: 503 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shuin.jp";

    // Checkout Session 作成
    const session = await createShuinCheckoutSession({
      productNumber,
      priceId,
      metadata: {
        product_number: String(productNumber),
        agreement_version: "v0.1",
      },
      successUrl: `${siteUrl}/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${siteUrl}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[shuin/checkout] error:", error);
    const message =
      error instanceof Error ? error.message : "Checkout 作成に失敗しました";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
