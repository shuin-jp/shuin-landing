/**
 * 朱印 ─ 知的財産・著作権セクション
 *
 * 「海外SaaSのクローンを再販する」という朱印商材への、よくある誤解を解くセクション。
 * 投資家・金融機関・税理士・弁護士・購入検討者の各ステークホルダーに対し、
 * 法令遵守の根拠と独自実装の事実を明示する。
 *
 * 配置：ResponsibilitySection の後、FAQSection の前を推奨。
 */
const pillars = [
  {
    no: "壱",
    title: "OSS由来＋ライセンス遵守",
    body: "朱印が販売する商材は、海外で実証されたオープンソース・ソフトウェア（MIT、Apache 2.0 等のパーミッシブ・ライセンス）由来のコードベースを参照しつつ、当方が独自に実装・改変したオリジナル成果物である。各 OSS のライセンス条件（著作権表記の保持、ライセンス全文の同梱、変更履歴の明示）を遵守し、商用利用は当該ライセンスにおいて許諾されている。",
  },
  {
    no: "弐",
    title: "独自実装によるオリジナル成果物",
    body: "朱印の商材は、上流の SaaS サービス自体を複製したものではなく、その「機能」を独自に再構成し実装したコードベースである。SaaS 業界では同種機能を提供する複数の OSS が並立しており（例：メール配信、電子署名、ステータスページ等の領域）、これらは互いに著作権を侵害することなく成立している。朱印もまた、独自実装の系譜に位置する。",
  },
  {
    no: "参",
    title: "商標・意匠・UIの独自設計",
    body: "朱印が販売する各号の商品名・ロゴ・UI デザインは、上流 SaaS から意図的に距離を取った独自設計を採用する。朱印ブランド本体（「朱印」「Shuin」）は商標調査を経て確定済みであり、各号商材についても、商品コードネーム・配色・タイポグラフィを独自展開し、出所混同のリスクを構造的に排除する。",
  },
  {
    no: "肆",
    title: "継続的なリスク管理体制",
    body: "朱印が販売する各商材は、法務スクリーニング（ライセンス整合・UI類似度・商標重複・判例リスクの 4軸）を経て選定される。商材確定時には、必要に応じて弁理士・弁護士による事前確認を経る。販売開始後も、上流 SaaS の規約変更・新規判例・商標出願動向を継続監視し、リスク発生時には販売停止または改修対応を行う。",
  },
];

export function IntellectualPropertySection() {
  return (
    <section
      id="intellectual-property"
      className="relative bg-sumi-soft py-32 sm:py-40 px-6 sm:px-10"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">
            ─ INTELLECTUAL PROPERTY ─
          </p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4] ja-balance">
            <span className="ja-phrase">なぜ朱印は、</span>
            <span className="ja-phrase">著作権を侵害しないのか。</span>
          </h2>
          <p className="font-mincho text-base sm:text-lg text-washi/65 leading-[1.9] mt-8 max-w-2xl mx-auto ja-balance">
            <span className="ja-phrase">「海外 SaaS のクローン販売」と</span>
            <span className="ja-phrase">誤解されることがある。</span>
            <br />
            <span className="ja-phrase">そうではない。</span>
            <span className="ja-phrase">以下が、その構造である。</span>
          </p>
        </header>

        <div className="space-y-8 sm:space-y-10 mb-16">
          {pillars.map((p, i) => (
            <article
              key={i}
              className="bg-sumi border border-asagi/15 rounded-sm p-8 sm:p-10"
            >
              <div className="flex items-start gap-6 sm:gap-8">
                <div className="shrink-0">
                  <p className="font-mincho text-xs text-asagi tracking-[0.3em] mb-2">
                    第{p.no}
                  </p>
                  <p className="font-mincho text-3xl sm:text-4xl text-vermillion leading-none">
                    {p.no}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-mincho text-xl sm:text-2xl text-washi tracking-wider mb-4 leading-[1.5] ja-balance">
                    {p.title}
                  </h3>
                  <p className="font-mincho text-sm sm:text-base text-washi/75 leading-[2.0] ja-strict">
                    {p.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 補足：詳細書類への導線 */}
        <div className="bg-sumi border-l-2 border-vermillion px-6 sm:px-10 py-8 sm:py-10">
          <p className="font-mincho text-xs sm:text-sm text-asagi tracking-[0.3em] mb-4">
            ─ 専門的な詳細をご希望の方へ ─
          </p>
          <p className="font-mincho text-sm sm:text-base text-washi/85 leading-[2.0] mb-3 ja-strict">
            <span className="ja-phrase">税理士・弁護士・弁理士・金融機関・投資家の皆様には、</span>
            <span className="ja-phrase">本セクションの詳細版（OSSライセンス対応表、商標調査結果、リスク管理体制）を</span>
            <span className="ja-phrase">別途書面にてご提供いたします。</span>
          </p>
          <p className="font-mincho text-sm sm:text-base text-washi/85 leading-[2.0] ja-strict">
            <span className="ja-phrase">下記までお問い合わせください：</span>
            <a
              href="mailto:shuin.jp.official@gmail.com?subject=知的財産・著作権に関する詳細資料のご請求"
              className="text-vermillion hover:underline mx-1"
            >
              shuin.jp.official@gmail.com
            </a>
          </p>
        </div>

        {/* DRAFT 注記 */}
        <p className="mt-12 text-center font-mincho text-xs text-washi/40 tracking-widest leading-[1.8]">
          <span className="ja-phrase">※ 本セクションの記述は、</span>
          <span className="ja-phrase">朱印運営者の現時点での理解に基づくものであり、</span>
          <span className="ja-phrase">最終的な文言は弁護士・弁理士のレビューを経て確定する予定です。</span>
        </p>
      </div>
    </section>
  );
}
