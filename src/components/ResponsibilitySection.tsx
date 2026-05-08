/**
 * 朱印 ─ 責任範囲セクション
 *
 * 購入直前に必ず読まれる位置に配置（MerchantCallSection の直前推奨）。
 * 朱印商人契約書 第7条「責任の範囲」と整合した、購入者責任の明示。
 *
 * 思想：「媚びない・煽らない」を貫きつつ、購入者に責任を引き受ける覚悟を促す。
 */
const promises_we_keep = [
  "海外で実証された即運用可能な完成コード",
  "デプロイマニュアル ─ コードを立ち上げ商品化するまでの手順書",
  "ビジネスサイクルマニュアル ─ 武器をお金に変えるまでの運営手順書",
  "30分のZoomデプロイ伴走（購入後3〜30日以内）",
  "永年のLINE相談（事業継続中の伴走）",
  "コードのアップデート権",
  "朱印状（販売権授与証 PDF）",
];

const promises_we_dont_keep = [
  "あなたが必ず売上を立てられること",
  "「誰でも簡単」「楽して」「初心者でも稼げる」という煽り",
  "販売・マーケティング・営業の役務提供",
  "顧客獲得の代行",
  "永久的な独占販売権（1号あたり10名上限の非独占）",
];

export function ResponsibilitySection() {
  return (
    <section
      id="responsibility"
      className="relative bg-sumi py-32 sm:py-40 px-6 sm:px-10"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">
            ─ RESPONSIBILITY ─
          </p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4] ja-balance">
            <span className="ja-phrase">朱印が約束すること、</span>
            <span className="ja-phrase">約束しないこと。</span>
          </h2>
          <p className="font-mincho text-base sm:text-lg text-washi/65 leading-[1.9] mt-8 max-w-2xl mx-auto ja-balance">
            <span className="ja-phrase">朱印は商材と運用伴走を授ける。</span>
            <br />
            <span className="ja-phrase">事業を構築するのは、</span>
            <span className="ja-phrase">あなた自身だ。</span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* 約束すること */}
          <div className="bg-sumi-soft border border-vermillion/20 rounded-sm p-8 sm:p-10">
            <h3 className="font-mincho text-xl sm:text-2xl text-vermillion tracking-wider mb-6 text-center">
              約束すること
            </h3>
            <ul className="space-y-4">
              {promises_we_keep.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-mincho text-sm sm:text-base text-washi/85 leading-[1.8] ja-strict"
                >
                  <span className="text-vermillion text-lg shrink-0 leading-none mt-1">
                    ◯
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 約束しないこと */}
          <div className="bg-sumi-soft border border-washi/15 rounded-sm p-8 sm:p-10">
            <h3 className="font-mincho text-xl sm:text-2xl text-washi/70 tracking-wider mb-6 text-center">
              約束しないこと
            </h3>
            <ul className="space-y-4">
              {promises_we_dont_keep.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-mincho text-sm sm:text-base text-washi/65 leading-[1.8] ja-strict"
                >
                  <span className="text-washi/40 text-lg shrink-0 leading-none mt-1">
                    ─
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 責任範囲の核心条項 */}
        <div className="bg-sumi-soft border-l-2 border-vermillion px-6 sm:px-10 py-8 sm:py-10">
          <p className="font-mincho text-xs sm:text-sm text-asagi tracking-[0.3em] mb-4">
            ─ 責任範囲（朱印商人契約書 第7条より） ─
          </p>
          <p className="font-mincho text-sm sm:text-base text-washi/85 leading-[2.0] mb-4 ja-strict">
            <span className="ja-phrase">朱印が提供する役務の範囲は、</span>
            <span className="ja-phrase">本商材の提供（コード・マニュアル・伴走・アップデート・朱印状）</span>
            <span className="ja-phrase">に限定される。</span>
          </p>
          <p className="font-mincho text-sm sm:text-base text-washi/85 leading-[2.0] mb-4 ja-strict">
            <strong className="text-vermillion">
              <span className="ja-phrase">販売・マーケティング・営業活動・顧客獲得・税務処理等は、</span>
              <span className="ja-phrase">すべて朱印商人ご自身の責任範疇に属する。</span>
            </strong>
          </p>
          <p className="font-mincho text-sm sm:text-base text-washi/85 leading-[2.0] ja-strict">
            <span className="ja-phrase">朱印を授かった商人が販売を行えなかった、</span>
            <span className="ja-phrase">または成果を出せなかったことを理由として、</span>
            <span className="ja-phrase">朱印は対価の返金・損害賠償・補償義務を一切負わない。</span>
          </p>
          <p className="font-mincho text-xs text-washi/45 leading-[1.8] mt-6 ja-strict">
            <span className="ja-phrase">購入前に、これらの活動を自らの責任で行う意思と能力があることを、</span>
            <span className="ja-phrase">ご自身の判断で確認してください。</span>
            <span className="ja-phrase">ご不明な点は LINE 公式アカウントよりお問い合わせください。</span>
          </p>
        </div>

        {/* 思想宣言 */}
        <p className="mt-16 text-center font-mincho text-base sm:text-lg text-asagi tracking-widest ja-balance">
          <span className="ja-phrase">─ 媚びない。</span>
          <span className="ja-phrase">煽らない。</span>
          <span className="ja-phrase">誰でも簡単などとは言わない。 ─</span>
        </p>
        <p className="mt-3 text-center font-mincho text-sm text-washi/50 tracking-widest ja-balance">
          <span className="ja-phrase">朱印は、</span>
          <span className="ja-phrase">選ばれた者の手に渡る。</span>
        </p>
      </div>
    </section>
  );
}
