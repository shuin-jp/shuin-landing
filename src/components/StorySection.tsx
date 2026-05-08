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
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4]">
            令和の朱印船を、ともに出航させよう。
          </h2>
        </header>

        <div className="space-y-10 font-mincho text-lg sm:text-xl text-washi/85 leading-[2.2] tracking-wide">
          <p>
            1853年、ペリーの黒船が浦賀に来航し、日本は開国した。
            しかし、本当の意味で日本の海外貿易を主導したのは、それより250年前、
            徳川幕府が朱印状を授けた商人たちだった。
          </p>

          <p>
            彼らは朱印船で東南アジアまで航海し、海外の知と物を日本へ運んだ。
            朱印を持つ者だけが、海を渡る権利を持っていた。
          </p>

          <p className="text-vermillion">
            令和の今、日本は再び停滞の中にある。
          </p>

          <p>
            DXもAXも遅れ、円安は進み、海外との差は広がる一方だ。
            G7の中でも最低の成長を続け、生まれ育った国の衰退を、
            私たちは見ている。
          </p>

          <p>
            その間にも、海外では毎日のように新しいAI／SaaSが生まれている。
            副業層は「自分も何かやりたい」と思いながら、
            売るコンテンツがなく一歩を踏み出せない。
            情報商材を買っても、結局は誰かの労働者のままだ。
          </p>

          <p className="border-l-2 border-vermillion pl-6 my-12">
            私は朱印を授ける。
            <br />
            あなたは商人になる。
            <br />
            <br />
            異国の武器を日本に持ち込み、自分の手で売り、
            日本のオーナーシップを再生する。
            <br />
            <br />
            労働者から事業主へ。
            <br />
            事業主から資本家へ。
          </p>

          <p className="text-center text-washi mt-16">
            その第一歩は、朱印を受け取ることから始まる。
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
