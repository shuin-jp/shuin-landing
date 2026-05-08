/**
 * 朱印 ─ Stripe クライアント設定
 *
 * Phase 1（5/29 第1号〜数号）：Stripe Checkout（Stripe ドメイン遷移型）
 * Phase 2（販売制限システム解放時）：Payment Element（自社統合型）
 *
 * 環境変数（Vercel Project Settings or .env.local）：
 *   STRIPE_SECRET_KEY              ─ サーバーサイドのみ（pk_live_... or sk_test_...）
 *   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  ─ クライアント公開可（pk_live_... or pk_test_...）
 *   STRIPE_WEBHOOK_SECRET          ─ Webhook 署名検証
 *
 * 開業届提出後（5/12 月曜）にアカウント開設して各値を設定。
 */
import Stripe from "stripe";

let _stripe: Stripe | null = null;

/**
 * サーバーサイド用 Stripe クライアント（singleton）
 * API Route / Server Component から呼ぶ
 */
export function getStripe(): Stripe {
  if (_stripe) return _stripe;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local for development or Vercel env for production."
    );
  }

  _stripe = new Stripe(secretKey, {
    apiVersion: "2026-04-22.dahlia",
    typescript: true,
    appInfo: {
      name: "朱印 (Shuin)",
      version: "1.0.0",
      url: "https://shuin.jp",
    },
  });

  return _stripe;
}

/**
 * 朱印商品 → Stripe Price ID マッピング
 *
 * Stripe ダッシュボードで各号を Product として登録 → Price ID をここに記載。
 * 第1号確定後に値を埋める（5/12 海原選定後）。
 */
export const SHUIN_PRODUCT_PRICES: Record<number, string> = {
  // 1: "price_...",  ← 第1号 Stripe Price ID（5/12 後に追記）
  // 2: "price_...",  ← 第2号
};

/**
 * 朱印 公開境界線：Stripe メタデータに渡す値の型
 */
export interface ShuinCheckoutMetadata {
  /** 朱印第N号の N */
  product_number: string;
  /** 商品コードネーム（あれば） */
  codename?: string;
  /** 朱印商人契約書のバージョン（同意取得時のスナップショット） */
  agreement_version: string;
}

/**
 * 朱印 Checkout Session 作成
 */
export async function createShuinCheckoutSession(args: {
  productNumber: number;
  priceId: string;
  metadata: ShuinCheckoutMetadata;
  successUrl: string;
  cancelUrl: string;
}): Promise<Stripe.Checkout.Session> {
  const stripe = getStripe();

  return await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: args.priceId,
        quantity: 1,
      },
    ],
    locale: "ja",
    success_url: args.successUrl,
    cancel_url: args.cancelUrl,
    metadata: {
      product_number: args.metadata.product_number,
      codename: args.metadata.codename ?? "",
      agreement_version: args.metadata.agreement_version,
    },
    payment_intent_data: {
      description: `朱印 第${args.metadata.product_number}号${
        args.metadata.codename ? ` ─ ${args.metadata.codename}` : ""
      }`,
    },
    consent_collection: {
      terms_of_service: "required",
    },
    custom_text: {
      terms_of_service_acceptance: {
        message:
          "朱印商人契約書および利用規約に同意します。販売・マーケティングは購入者責任であることを理解しています。",
      },
    },
    // 朱印は領収書を Stripe 自動発行に任せる
    invoice_creation: {
      enabled: true,
      invoice_data: {
        description: "朱印 ─ 海外SaaSクローン完成コード + 朱印商人パッケージ",
        footer:
          "当事業者は適格請求書発行事業者（インボイス）には登録しておりません。表示価格はすべて税込です。",
      },
    },
  });
}
