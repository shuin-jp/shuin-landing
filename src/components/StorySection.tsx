export function StorySection() {
  return (
    <section
      id="story"
      className="relative bg-sumi py-32 sm:py-40 px-6 sm:px-10 overflow-hidden"
    >
      {/* 微細な装飾線 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-vermillion/40 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-20">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">─ STORY ─</p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4] ja-balance">
            <span className="ja-phrase">令和の朱印船を、</span>
            <span className="ja-phrase">ともに出航させよう。</span>
          </h2>
        </header>

        <div className="space-y-10 font-mincho text-lg sm:text-xl text-washi/85 leading-[2.2] tracking-wide ja-strict">
          <p>
            <span className="ja-phrase">1853年、</span>
            <span className="ja-phrase">ペリーの黒船が浦賀に来航し、</span>
            <span className="ja-phrase">日本は開国した。</span>
            <span className="ja-phrase">しかし、</span>
            <span className="ja-phrase">本当の意味で日本の海外貿易を主導したのは、</span>
            <span className="ja-phrase">それより250年前、</span>
            <span className="ja-phrase">徳川幕府が朱印状を授けた商人たちだった。</span>
          </p>

          <p>
            <span className="ja-phrase">彼らは朱印船で東南アジアまで航海し、</span>
            <span className="ja-phrase">海外の知と物を日本へ運んだ。</span>
            <span className="ja-phrase">朱印を持つ者だけが、</span>
            <span className="ja-phrase">海を渡る権利を持っていた。</span>
          </p>

          <p className="text-vermillion">
            令和の今、日本は再び停滞の中にある。
          </p>

          <p>
            <span className="ja-phrase">DXもAXも遅れ、</span>
            <span className="ja-phrase">円安は進み、</span>
            <span className="ja-phrase">海外との差は広がる一方だ。</span>
            <span className="ja-phrase">G7の中でも最低の成長を続け、</span>
            <span className="ja-phrase">生まれ育った国の衰退を、</span>
            <span className="ja-phrase">私たちは見ている。</span>
          </p>

          <p>
            <span className="ja-phrase">その間にも、</span>
            <span className="ja-phrase">海外では毎日のように新しいAI／SaaSが生まれている。</span>
            <span className="ja-phrase">副業層は「自分も何かやりたい」と思いながら、</span>
            <span className="ja-phrase">売るコンテンツがなく一歩を踏み出せない。</span>
            <span className="ja-phrase">情報商材を買っても、</span>
            <span className="ja-phrase">結局は誰かの労働者のままだ。</span>
          </p>

          <blockquote className="border-l-2 border-vermillion pl-6 my-12 space-y-4">
            <p className="ja-balance">
              <span className="ja-phrase">私は朱印を授ける。</span>
              {" "}
              <span className="ja-phrase">あなたは商人になる。</span>
            </p>
            <p className="ja-balance">
              <span className="ja-phrase">異国の武器を日本に持ち込み、</span>
              <span className="ja-phrase">自分の手で売り、</span>
              <span className="ja-phrase">日本のオーナーシップを再生する。</span>
            </p>
            <p className="ja-balance">
              <span className="ja-phrase">労働者から事業主へ。</span>
              {" "}
              <span className="ja-phrase">事業主から資本家へ。</span>
            </p>
          </blockquote>

          <p className="text-center text-washi mt-16 ja-balance">
            <span className="ja-phrase">その第一歩は、</span>
            <span className="ja-phrase">朱印を受け取ることから始まる。</span>
          </p>
        </div>

        {/* マニフェスト全文への導線（執筆完了後にリンク有効化） */}
        <div className="mt-20 text-center">
          <p className="font-mincho text-sm text-washi/50 tracking-widest">
            ─ マニフェスト全文（近日公開）─
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-vermillion/40 to-transparent" />
    </section>
  );
}
