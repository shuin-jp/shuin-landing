import type { Metadata } from "next";
import Image from "next/image";
import { linkItems } from "@/data/links";

export const metadata: Metadata = {
  title: "リンク一覧 | 朱印",
  description: "朱印の公式サイト・LINE・各SNSへのリンク集。",
  robots: { index: false, follow: false },
};

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function LinksPage() {
  const primary = linkItems.filter((l) => l.emphasis === "primary");
  const secondary = linkItems.filter((l) => l.emphasis !== "primary");

  return (
    <main className="min-h-screen bg-sumi-texture flex flex-col items-center justify-start py-16 px-5">
      {/* ロゴ・印章 */}
      <div className="animate-seal-press mb-6">
        <Image
          src="/shuin-seal.png"
          alt="朱印"
          width={80}
          height={80}
          className="opacity-90"
          priority
        />
      </div>

      {/* ブランド名 */}
      <div className="animate-fade-in-up delay-200 text-center mb-2">
        <p className="font-mincho text-2xl text-washi tracking-[0.3em]">朱印</p>
      </div>

      {/* キャッチ */}
      <div className="animate-fade-in-up delay-400 text-center mb-12">
        <p className="font-mincho text-xs text-asagi tracking-[0.4em]">
          令和の朱印船
        </p>
      </div>

      {/* リンク群 */}
      <div className="animate-fade-in-up delay-600 w-full max-w-sm flex flex-col gap-3">
        {/* LINE（プライマリ） */}
        {primary.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-2 border-vermillion bg-vermillion/8 hover:bg-vermillion/18 active:scale-[0.98] transition-all duration-200 rounded-sm px-6 py-5"
          >
            <div className="min-w-0">
              <p className="font-mincho text-lg text-vermillion tracking-wider leading-tight">
                {link.name}
              </p>
              {link.description && (
                <p className="font-mincho text-xs text-washi/70 mt-1 leading-relaxed">
                  {link.description}
                </p>
              )}
            </div>
            <span className="text-vermillion group-hover:translate-x-1 transition-transform">
              <ArrowIcon />
            </span>
          </a>
        ))}

        {/* セパレーター */}
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-washi/10" />
          <p className="font-mincho text-xs text-washi/30 tracking-widest">─</p>
          <div className="flex-1 h-px bg-washi/10" />
        </div>

        {/* その他リンク */}
        {secondary.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border border-washi/15 bg-sumi-soft/50 hover:border-asagi/60 hover:bg-sumi-soft active:scale-[0.98] transition-all duration-200 rounded-sm px-5 py-4"
          >
            <div className="min-w-0">
              <p className="font-mincho text-base text-washi tracking-wider leading-tight">
                {link.name}
              </p>
              {link.description && (
                <p className="font-mincho text-xs text-washi/50 mt-0.5 leading-relaxed">
                  {link.description}
                </p>
              )}
            </div>
            <span className="text-washi/30 group-hover:text-asagi group-hover:translate-x-1 transition-all">
              <ArrowIcon />
            </span>
          </a>
        ))}
      </div>

      {/* フッター */}
      <p className="mt-14 font-mincho text-xs text-washi/25 tracking-widest">
        © 2026 朱印
      </p>
    </main>
  );
}
