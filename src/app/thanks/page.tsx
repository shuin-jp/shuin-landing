/**
 * 朱印 ─ 決済完了後のサンクスページ
 *
 * Stripe Checkout 後、顧客が戻るランディング。
 * 「朱印を授かった商人」としての誇りと、次に何が起きるかの案内。
 */
import Link from "next/link";

export const metadata = {
  title: "朱印を授かりました ─ 朱印",
  description: "朱印商人として、令和の朱印船貿易にようこそ。",
};

export default function ThanksPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return (
    <main className="bg-sumi text-washi min-h-screen flex flex-col">
      <header className="border-b border-washi/10 py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="font-mincho text-sm text-washi/40 hover:text-vermillion transition-colors tracking-widest"
          >
            朱印
          </Link>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl text-center">
          {/* 朱印章 */}
          <div className="mb-12">
            <img
              src="/shuin-seal.png"
              alt="朱印"
              className="w-32 h-32 mx-auto opacity-95"
            />
          </div>

          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">
            ─ 朱印を授ける ─
          </p>

          <h1 className="font-mincho text-3xl sm:text-4xl text-washi tracking-wider leading-[1.5] mb-12">
            令和の朱印船商人として、
            <br />
            あなたを認めます。
          </h1>

          <div className="bg-sumi-soft border border-washi/10 rounded-sm p-8 sm:p-10 text-left mb-12">
            <h2 className="font-mincho text-lg text-vermillion tracking-wider mb-6 text-center">
              次に届くもの
            </h2>
            <ul className="font-mincho text-sm sm:text-base text-washi/85 leading-[2.0] space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-vermillion shrink-0">①</span>
                <span>
                  <strong className="text-washi">朱印状PDF</strong>
                  （販売権授与証）─ ご登録のメールアドレスに 24 時間以内
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion shrink-0">②</span>
                <span>
                  <strong className="text-washi">GitHub プライベートリポジトリ</strong>
                  への招待 ─ 3 営業日以内
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion shrink-0">③</span>
                <span>
                  <strong className="text-washi">Zoomデプロイ伴走（30分）</strong>
                  の予約案内 ─ メールに Calendly URL が記載されます
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion shrink-0">④</span>
                <span>
                  <strong className="text-washi">デプロイ + ビジネスサイクルマニュアル</strong>
                  へのアクセス権 ─ 即時付与
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion shrink-0">⑤</span>
                <span>
                  <strong className="text-washi">LINE 公式での永年伴走</strong>
                  ─ 友だち追加 URL は同じくメールにて
                </span>
              </li>
            </ul>
          </div>

          <p className="font-mincho text-base sm:text-lg text-washi/75 leading-[1.9] mb-12">
            異国の武器を、日本の事業主に授ける。
            <br />
            労働者から事業主へ。事業主から資本家へ。
            <br />
            <span className="text-vermillion">─ 令和の朱印船を、ともに出航させよう。</span>
          </p>

          {searchParams.session_id && (
            <p className="font-mincho text-[10px] text-washi/30 tracking-widest mb-8">
              注文ID: {searchParams.session_id}
            </p>
          )}

          <Link
            href="/"
            className="inline-block font-mincho text-sm text-asagi hover:text-vermillion transition-colors tracking-wider underline"
          >
            朱印 トップへ戻る
          </Link>
        </div>
      </section>

      <footer className="border-t border-washi/10 py-12 px-6 text-center">
        <p className="font-mincho text-xs text-washi/40 tracking-widest">
          ご不明な点は LINE 公式アカウントよりお問い合わせください
        </p>
      </footer>
    </main>
  );
}
