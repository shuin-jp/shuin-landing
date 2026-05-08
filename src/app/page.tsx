import { HeroSection } from "@/components/HeroSection";
import { GlossarySection } from "@/components/GlossarySection";
import { StorySection } from "@/components/StorySection";
import { PromiseSection } from "@/components/PromiseSection";
import { ResponsibilitySection } from "@/components/ResponsibilitySection";
import { FAQSection } from "@/components/FAQSection";
import { SaasRoadmapSection } from "@/components/SaasRoadmapSection";
import { MerchantCallSection } from "@/components/MerchantCallSection";
import { LinksSection } from "@/components/LinksSection";

// SaaS ロードマップのカウントダウン数値を1時間ごとに再生成
// （JSON更新→push→Vercel自動再ビルドで反映、加えてISRで時間経過にも追従）
export const revalidate = 3600;

// LP の最終更新日（フッター表示）
const LAST_UPDATED = "2026-05-09";

export default function Home() {
  return (
    <main className="bg-sumi text-washi">
      {/* 第一印象：思想宣言 + 希少性訴求 */}
      <HeroSection />

      {/* 用語ミニ解説：朱印・朱印船・朱印商人 */}
      <GlossarySection />

      {/* 思想・物語：朱印船貿易メタファー */}
      <StorySection />

      {/* 約束：朱印が誓う5つの誓い */}
      <PromiseSection />

      {/* 責任範囲：約束すること、約束しないこと */}
      <ResponsibilitySection />

      {/* よくある質問：8つの懸念に誠実に答える */}
      <FAQSection />

      {/* 出航スケジュール：今週・次回ローンチのカウントダウン */}
      <SaasRoadmapSection />

      {/* 朱印商人募集：CTA */}
      <MerchantCallSection />

      {/* 各SNS・LINE への導線 */}
      <LinksSection />

      <footer className="bg-sumi border-t border-washi/10 py-12 px-6 text-center">
        <p className="font-mincho text-sm text-washi/40 tracking-widest mb-2">
          朱印 ─ Shuin. SaaS Trading
        </p>
        <p className="font-mincho text-xs text-washi/30 tracking-widest mb-6">
          © 2026 朱印 / shuin.jp
        </p>

        {/* 法務文書リンク */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-4"
          aria-label="法務文書"
        >
          <a
            href="/legal/tokushoho"
            className="font-mincho text-xs text-washi/50 hover:text-vermillion transition-colors tracking-wider"
          >
            特定商取引法に基づく表記
          </a>
          <a
            href="/legal/terms"
            className="font-mincho text-xs text-washi/50 hover:text-vermillion transition-colors tracking-wider"
          >
            利用規約
          </a>
          <a
            href="/legal/privacy"
            className="font-mincho text-xs text-washi/50 hover:text-vermillion transition-colors tracking-wider"
          >
            プライバシーポリシー
          </a>
          <a
            href="/legal/refund"
            className="font-mincho text-xs text-washi/50 hover:text-vermillion transition-colors tracking-wider"
          >
            返金ポリシー
          </a>
          <a
            href="/legal/merchant-agreement"
            className="font-mincho text-xs text-washi/50 hover:text-vermillion transition-colors tracking-wider"
          >
            朱印商人契約書
          </a>
        </nav>

        <p className="font-mincho text-[10px] text-washi/30 tracking-widest mt-2 ja-balance">
          <span className="ja-phrase">朱印（屋号）／ </span>
          <span className="ja-phrase">運営事業者・所在地等の詳細は</span>
          <a
            href="/legal/tokushoho"
            className="text-washi/50 hover:text-vermillion transition-colors mx-1"
          >
            特定商取引法に基づく表記
          </a>
          <span className="ja-phrase">をご覧ください</span>
        </p>

        {/* 最終更新日 */}
        <p className="font-mincho text-[10px] text-washi/25 tracking-widest mt-6">
          Last updated: {LAST_UPDATED}
        </p>
      </footer>
    </main>
  );
}
