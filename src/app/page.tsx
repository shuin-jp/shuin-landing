import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { PromiseSection } from "@/components/PromiseSection";
import { SaasRoadmapSection } from "@/components/SaasRoadmapSection";
import { MerchantCallSection } from "@/components/MerchantCallSection";
import { LinksSection } from "@/components/LinksSection";

// SaaS ロードマップのカウントダウン数値を1時間ごとに再生成
// （JSON更新→push→Vercel自動再ビルドで反映、加えてISRで時間経過にも追従）
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="bg-sumi text-washi">
      <HeroSection />
      <StorySection />
      <PromiseSection />
      <SaasRoadmapSection />
      <MerchantCallSection />
      <LinksSection />

      <footer className="bg-sumi border-t border-washi/10 py-12 px-6 text-center">
        <p className="font-mincho text-sm text-washi/40 tracking-widest mb-2">
          朱印 ─ Shuin. SaaS Trading
        </p>
        <p className="font-mincho text-xs text-washi/30 tracking-widest">
          © 2026 朱印 / shuin.jp
        </p>
      </footer>
    </main>
  );
}
