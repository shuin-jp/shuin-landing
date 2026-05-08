/**
 * 朱印 ─ 法務文書ページ共通レイアウト
 *
 * 特商法表記・利用規約・プライバシーポリシー・返金ポリシー・朱印商人契約書
 * いずれも同じレイアウトで表示。墨基調 + 和紙風カードで読みやすく。
 */
import Link from "next/link";

export interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="bg-sumi text-washi min-h-screen">
      {/* ヘッダー */}
      <header className="border-b border-washi/10 py-8 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="font-mincho text-sm text-washi/50 hover:text-vermillion transition-colors tracking-widest"
          >
            ← 朱印 トップへ戻る
          </Link>
        </div>
      </header>

      {/* タイトル */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 text-center border-b border-washi/10">
        <p className="font-mincho text-xs text-asagi tracking-[0.4em] mb-4">
          ─ LEGAL DOCUMENT ─
        </p>
        <h1 className="font-mincho text-3xl sm:text-4xl text-washi tracking-wider leading-[1.4]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-mincho text-sm text-washi/55 mt-4 tracking-wider">
            {subtitle}
          </p>
        )}
        {lastUpdated && (
          <p className="font-mincho text-xs text-washi/40 mt-3 tracking-widest">
            最終改定：{lastUpdated}
          </p>
        )}
      </section>

      {/* 本文（和紙風カード） */}
      <article className="py-16 sm:py-20 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto bg-sumi-soft border border-washi/10 rounded-sm p-8 sm:p-12">
          <div className="prose prose-invert max-w-none font-mincho text-washi/85 leading-[2.0] [&_h2]:text-washi [&_h2]:tracking-wider [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h3]:text-washi/95 [&_h3]:tracking-wider [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_p]:my-4 [&_ul]:my-4 [&_ul]:pl-6 [&_li]:my-2 [&_table]:my-6 [&_table]:w-full [&_th]:bg-sumi/50 [&_th]:text-washi/95 [&_th]:p-3 [&_th]:text-left [&_th]:border [&_th]:border-washi/15 [&_td]:p-3 [&_td]:border [&_td]:border-washi/15 [&_strong]:text-vermillion [&_a]:text-asagi [&_a]:hover:text-vermillion [&_a]:underline [&_code]:bg-sumi/60 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs">
            {children}
          </div>
        </div>
      </article>

      {/* フッター */}
      <footer className="border-t border-washi/10 py-12 px-6 text-center">
        <p className="font-mincho text-xs text-washi/40 tracking-widest mb-3">
          ご不明な点は LINE 公式アカウントよりお問い合わせください
        </p>
        <a
          href="https://lin.ee/T0CHghs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mincho text-sm text-vermillion hover:text-vermillion/80 transition-colors tracking-wider"
        >
          LINE 公式アカウント →
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs">
          <Link href="/legal/tokushoho" className="text-washi/40 hover:text-vermillion tracking-wider">
            特商法
          </Link>
          <Link href="/legal/terms" className="text-washi/40 hover:text-vermillion tracking-wider">
            利用規約
          </Link>
          <Link href="/legal/privacy" className="text-washi/40 hover:text-vermillion tracking-wider">
            プライバシー
          </Link>
          <Link href="/legal/refund" className="text-washi/40 hover:text-vermillion tracking-wider">
            返金
          </Link>
          <Link href="/legal/merchant-agreement" className="text-washi/40 hover:text-vermillion tracking-wider">
            朱印商人契約
          </Link>
        </div>
        <p className="font-mincho text-[10px] text-washi/25 tracking-widest mt-6">
          © 2026 朱印 / shuin.jp
        </p>
      </footer>
    </main>
  );
}

/**
 * ⚠️ 重要：本ページの法務文書はすべて AI による草案。
 * 公開前に弁護士・税理士の最終確認が必須。
 * 本番ローンチ前に各 page.tsx に本物の確定文言を流し込む。
 */
export function DraftBanner() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 mb-6">
      <div className="bg-vermillion/10 border border-vermillion/30 rounded-sm p-4">
        <p className="font-mincho text-xs text-vermillion tracking-wider leading-[1.8]">
          ⚠ 草案（DRAFT）：本文書は AI による草案。本番公開前に弁護士・税理士のレビュー後、確定文言に差し替え予定。
        </p>
      </div>
    </div>
  );
}
