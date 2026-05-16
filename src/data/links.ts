/**
 * 朱印 全 SNS / プラットフォーム リンク集
 */

export type LinkItem = {
  id: string;
  name: string;
  url: string;
  description?: string;
  emphasis?: "primary" | "secondary";
  emoji?: string;
};

export const linkItems: LinkItem[] = [
  {
    id: "line",
    name: "LINE 公式",
    url: "https://lin.ee/T0CHghs",
    description: "朱印商人になるための第一歩。永年伴走する場。",
    emphasis: "primary",
  },
  {
    id: "lp",
    name: "朱印 公式サイト",
    url: "https://shuin.jp",
    description: "思想・商品・約束の全貌。",
    emphasis: "secondary",
  },
  {
    id: "x",
    name: "X",
    url: "https://x.com/shuin_official",
    description: "毎日の発信。思想と数字。",
    emphasis: "secondary",
  },
  {
    id: "note",
    name: "note",
    url: "https://note.com/shuin_jp_official",
    description: "マニフェスト型長文。月1配信、ブランドの錨。",
    emphasis: "secondary",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@shuin.jp.official",
    description: "短編動画。冒頭3秒の刃。",
    emphasis: "secondary",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/shuin.jp.official/",
    description: "視覚で語る朱印の世界観。",
    emphasis: "secondary",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@shuin.jp.official",
    description: "Reels 横展開。",
    emphasis: "secondary",
  },
  {
    id: "threads",
    name: "Threads",
    url: "https://www.threads.net/@shuin.jp.official",
    description: "短文の連投。",
    emphasis: "secondary",
  },
];
