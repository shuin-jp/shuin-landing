import Image from "next/image";

export function MerchantCallSection() {
  return (
    <section
      id="merchants"
      className="relative bg-sumi-soft py-32 sm:py-40 px-6 sm:px-10 overflow-hidden"
    >
      {/* 朱印章を背景の左上から覗かせる */}
      <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 pointer-events-none select-none opacity-20">
        <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px]">
          <Image
            src="/shuin-seal.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 480px"
          />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">
            ─ MERCHANTS ─
          </p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4]">
            朱印商人を、募る。
          </h2>
        </header>

        <div className="space-y-8 font-mincho text-lg sm:text-xl text-washi/85 leading-[2] tracking-wide text-center">
          <p>
            朱印を授かった者は、
            <br className="sm:hidden" />
            「朱印第N号商人」を名乗る権利を得る。
          </p>

          <p>
            ¥100,000の朱印を受け取り、
            <br className="sm:hidden" />
            異国の武器を日本に持ち込む者。
          </p>

          <p>
            朱印商人ネットワークに参画し、
            <br className="sm:hidden" />
            商人同士の知見を交わす者。
          </p>

          <p className="text-vermillion text-xl sm:text-2xl">
            労働者ではない。
            <br />
            あなたは、商人になる。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "朱印書院",
              body: "商人専用コミュニティ。月次座談会と知見共有。",
            },
            {
              title: "永年伴走",
              body: "30分Zoomデプロイ + 永年LINE相談。卒業はない。",
            },
            {
              title: "MVP朱印商人",
              body: "月次表彰。文化的勲章としての称号制度。",
            },
          ].map((box) => (
            <div
              key={box.title}
              className="border border-washi/15 rounded-sm bg-sumi/40 p-6 hover:border-vermillion/40 transition-colors duration-300"
            >
              <h3 className="font-mincho text-lg sm:text-xl text-vermillion tracking-wider mb-3">
                {box.title}
              </h3>
              <p className="font-mincho text-sm text-washi/70 leading-relaxed">
                {box.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mincho text-sm text-washi/50 tracking-widest mb-6">
            ─ 第1号 朱印商人の応募開始は、5/29 出航と同時 ─
          </p>
          <a
            href="https://lin.ee/T0CHghs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-vermillion text-washi font-mincho text-lg tracking-widest hover:bg-vermillion/90 transition-colors duration-300 rounded-sm"
          >
            朱印商人候補に名を連ねる
          </a>
          <p className="mt-4 font-mincho text-xs text-washi/40 tracking-widest">
            （LINE 公式に登録 → 出航通知を受け取る）
          </p>
        </div>
      </div>
    </section>
  );
}
