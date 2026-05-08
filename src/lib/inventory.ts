/**
 * 朱印 ─ 販売数量管理（10名上限）
 *
 * Phase 1（短期）：Vercel KV / Upstash Redis でカウンタ管理
 * Phase 2（中期）：Supabase に移行、朱印商人マスタも統合
 *
 * 現在は Phase 1 想定の Redis ベース実装スケルトン。
 * 5/12 開業届提出後、Vercel Marketplace から Upstash Redis を有効化して環境変数を設定。
 */

const SOLD_KEY = (n: number) => `shuin:product:${n}:sold`;
const PURCHASES_KEY = (n: number) => `shuin:product:${n}:purchases`;

/** 1号あたりの販売上限 */
export const MAX_PER_PRODUCT = 10;

/**
 * 残り販売数を取得
 *
 * @param productNumber 朱印第N号の N
 * @returns 残り数（0 ならローンチ終了）
 */
export async function getRemainingStock(productNumber: number): Promise<number> {
  const sold = await getSoldCount(productNumber);
  return Math.max(0, MAX_PER_PRODUCT - sold);
}

/**
 * 売上数を取得
 */
export async function getSoldCount(productNumber: number): Promise<number> {
  // TODO(5/12 以降): Vercel KV / Upstash Redis を実装
  // const { kv } = await import("@vercel/kv");
  // return (await kv.get<number>(SOLD_KEY(productNumber))) ?? 0;

  // Phase 0 stub：環境変数未設定時はゼロを返す（モック動作）
  if (!process.env.KV_REST_API_URL) {
    console.warn("[shuin/inventory] KV not configured, returning stub value");
    return 0;
  }
  return 0;
}

/**
 * 販売カウンタをインクリメント（決済完了時の Webhook で呼ぶ）
 *
 * 注意：レースコンディション回避のため Redis の INCR を使う必要がある。
 * 単純な「get → +1 → set」では同時購入時に上限を超える可能性がある。
 */
export async function incrementSold(args: {
  productNumber: number;
  stripeSessionId: string;
  customerEmail: string;
}): Promise<{ newSoldCount: number; reservedSlot: number }> {
  // TODO(5/12 以降): Vercel KV / Upstash Redis を実装
  // const { kv } = await import("@vercel/kv");
  // const newSold = await kv.incr(SOLD_KEY(args.productNumber));
  // await kv.lpush(PURCHASES_KEY(args.productNumber), JSON.stringify({
  //   stripeSessionId: args.stripeSessionId,
  //   customerEmail: args.customerEmail,
  //   reservedAt: new Date().toISOString(),
  // }));
  // return { newSoldCount: newSold, reservedSlot: newSold };

  console.warn("[shuin/inventory] incrementSold called but KV not configured");
  return { newSoldCount: 1, reservedSlot: 1 };
}

/**
 * 購入リスト取得（管理画面用、当面は使わない）
 */
export async function getPurchases(productNumber: number): Promise<
  Array<{
    stripeSessionId: string;
    customerEmail: string;
    reservedAt: string;
  }>
> {
  // TODO(5/12 以降): Vercel KV から取得
  return [];
}

/**
 * 在庫切れ時の挙動制御
 */
export function isProductSoldOut(remaining: number): boolean {
  return remaining <= 0;
}

/**
 * 在庫の表示文言生成
 */
export function getStockDisplayText(remaining: number): string {
  if (remaining <= 0) return "販売終了（先着10名様の上限到達）";
  if (remaining === 1) return "残りわずか（あと1名様）";
  if (remaining <= 3) return `残り${remaining}名様`;
  return `残り${remaining}名様 / 先着10名様`;
}
