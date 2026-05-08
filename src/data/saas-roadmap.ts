/**
 * 朱印 SaaS ロードマップ
 *
 * 毎週金曜21:00ローンチ前に更新 → git push → Vercel 自動再デプロイ
 * Next.js の ISR（revalidate=3600）と併用で1時間毎に再生成、カウントダウンも追従。
 *
 * 更新ルール:
 *   - ローンチ確定したら status = "live" に変更
 *   - 1週間限定販売終了で status = "sold-out" に
 *   - 翌週新作の準備が整ったら upcoming → current に昇格
 */

export type SaasStatus = "tba" | "preparing" | "live" | "sold-out" | "released";

export type SaasItem = {
  /** 朱印第N号の N */
  number: number;
  /** 商品名（朱印 第N号 ─ [コードネーム]）。コードネーム未定の場合は省略可 */
  codename?: string;
  /** ローンチ日時（ISO8601、JST） */
  launchDate: string;
  /** 状態 */
  status: SaasStatus;
  /** 一言説明（120字以内推奨）*/
  description?: string;
  /** カテゴリ（任意） */
  category?: string;
  /** 価格（任意、デフォルト ¥100,000） */
  price?: number;
};

export type SaasRoadmap = {
  /** 現在進行中（最も近い未来 or 開催中） */
  current: SaasItem;
  /** 次回以降の予告（最大3件想定） */
  upcoming: SaasItem[];
  /** 過去にリリース済み（新しい順） */
  released: SaasItem[];
};

export const saasRoadmap: SaasRoadmap = {
  current: {
    number: 1,
    codename: undefined, // 5/12 TIS リサーチで確定
    launchDate: "2026-05-29T21:00:00+09:00",
    status: "preparing",
    description:
      "海外で実証済みのAI / SaaSを朱印船貿易の現代版として日本に持ち込む第1号。コードネームは TIS リサーチ後に確定。",
    category: "未定",
    price: 100000,
  },
  upcoming: [
    {
      number: 2,
      launchDate: "2026-06-05T21:00:00+09:00",
      status: "tba",
      description: "毎週金曜21:00、新たな朱印が出航する。",
    },
    {
      number: 3,
      launchDate: "2026-06-12T21:00:00+09:00",
      status: "tba",
      description: "毎週金曜21:00、新たな朱印が出航する。",
    },
  ],
  released: [],
};

/**
 * カウントダウン用：JST のローンチ日時から残り時間を計算
 */
export function timeUntilLaunch(launchDate: string, now: Date = new Date()) {
  const target = new Date(launchDate).getTime();
  const diff = target - now.getTime();

  if (diff <= 0) {
    return { isPast: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { isPast: false, days, hours, minutes, seconds };
}

/**
 * 状態のラベル日本語化
 */
export const statusLabel: Record<SaasStatus, string> = {
  tba: "後日告知",
  preparing: "準備中",
  live: "販売中",
  "sold-out": "販売終了",
  released: "リリース済",
};
