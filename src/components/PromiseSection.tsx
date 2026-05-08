const promises = [
  {
    n: "壱",
    title: "毎週金曜21:00、必ず新作を出航させる。",
    body: "例外なく続ける。朱印船は風が吹かなくとも漕ぐ。",
  },
  {
    n: "弐",
    title: "30分Zoom伴走で、必ず動かす。",
    body: "「動いた」状態を保証する。動かなければ全額返金する。",
  },
  {
    n: "参",
    title: "永年LINE相談を生涯にわたり続ける。",
    body: "購入者を朱印商人として終生伴走する。卒業はない。",
  },
  {
    n: "肆",
    title: "媚びない。煽らない。",
    body: "情報商材的軽薄さに堕さない。思想を背骨に、和の品位を貫く。",
  },
  {
    n: "伍",
    title: "価値交換の倫理を守る。",
    body: "無料文化に染まらない。¥100,000という価格に見合う本物の価値を提供し続ける。",
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
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4]">
            朱印が誓う、五つの約束。
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
                <h3 className="font-mincho text-xl sm:text-2xl md:text-3xl text-washi tracking-wide leading-[1.5] mb-3">
                  {p.title}
                </h3>
                <p className="font-mincho text-base sm:text-lg text-washi/75 leading-[1.9]">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-20 text-center font-mincho text-base sm:text-lg text-asagi tracking-widest">
          ─ 朱印は「令和の朱印船」として、日本の経済再生に責任を持つ ─
        </p>
      </div>
    </section>
  );
}
