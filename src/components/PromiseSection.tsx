const promises = [
  {
    n: "壱",
    title: "毎週金曜21:00、必ず新作を出航させる。",
    body: "例外なく続ける。朱印船は風が吹かなくとも漕ぐ。",
  },
  {
    n: "弐",
    title: "30分Zoom伴走で、必ず動かす。",
    body: "「動いた」状態を保証する。重大な不履行があった場合は返金ポリシーに従う。",
  },
  {
    n: "参",
    title: "永年LINE相談を生涯にわたり続ける。",
    body: "事業継続中の朱印商人として終生伴走する。卒業はない（停止条件は朱印商人契約書 第8条）。",
  },
  {
    n: "肆",
    title: "媚びない。煽らない。",
    body: "情報商材的軽薄さに堕さない。思想を背骨に、和の品位を貫く。",
  },
  {
    n: "伍",
    title: "価値交換の倫理を守る。",
    body: "無料文化に染まらない。税込¥100,000〜（号により変動）という価格に見合う本物の価値を提供し続ける。",
  },
];

export function PromiseSection() {
  return (
    <section
      id="promise"
      className="relative bg-sumi-soft py-32 sm:py-40 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">─ PROMISE ─</p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4] ja-balance">
            <span className="ja-phrase">朱印が誓う、</span>
            <span className="ja-phrase">五つの約束。</span>
          </h2>
        </header>

        <ol className="space-y-12 sm:space-y-16">
          {promises.map((p) => (
            <li
              key={p.n}
              className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start"
            >
              <span
                aria-hidden="true"
                className="font-mincho text-5xl sm:text-6xl text-vermillion leading-none select-none w-16 text-center"
              >
                {p.n}
              </span>
              <div>
                <h3 className="font-mincho text-xl sm:text-2xl md:text-3xl text-washi tracking-wide leading-[1.5] mb-3 ja-strict">
                  {p.title}
                </h3>
                <p className="font-mincho text-base sm:text-lg text-washi/75 leading-[1.9] ja-strict">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-20 text-center font-mincho text-base sm:text-lg text-asagi tracking-widest ja-balance">
          <span className="ja-phrase">─ 朱印は「令和の朱印船」として、</span>
          <span className="ja-phrase">日本の経済再生に責任を持つ ─</span>
        </p>
      </div>
    </section>
  );
}
