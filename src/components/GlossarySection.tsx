/**
 * 朱印 ─ 用語ミニ解説セクション
 *
 * Hero と Story の間に配置。
 * 「朱印」「朱印船」「朱印商人」「朱印状」を初見の読者に1-2行で示し、
 * Story 本編に入る前の認知負荷を軽減する。
 *
 * UX ヒューリスティック C3「用語解説」改善対応。
 */
const terms = [
  {
    label: "朱印",
    reading: "しゅいん",
    description: "本ブランドの名。江戸幕府が海外貿易商人に授けた公認の印章に由来する。",
  },
  {
    label: "朱印船",
    reading: "しゅいんせん",
    description: "朱印を授かった商人のみが乗ることができた、海外貿易公認の船。",
  },
  {
    label: "朱印商人",
    reading: "しゅいんしょうにん",
    description: "朱印を授かった令和の商人。海外SaaSを日本に運び、自分の事業として売る人。",
  },
];

export function GlossarySection() {
  return (
    <section
      id="glossary"
      className="relative bg-sumi py-16 sm:py-20 px-6 sm:px-10 border-t border-b border-washi/5"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center font-mincho text-xs text-asagi tracking-[0.4em] mb-8">
          ─ TERMS ─
        </p>
        <dl className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {terms.map((term) => (
            <div key={term.label} className="text-center sm:text-left">
              <dt className="mb-2">
                <span className="font-mincho text-lg sm:text-xl text-vermillion tracking-wider">
                  {term.label}
                </span>
                <span className="ml-2 font-mincho text-[10px] text-washi/40 tracking-widest">
                  {term.reading}
                </span>
              </dt>
              <dd className="font-mincho text-xs sm:text-sm text-washi/65 leading-[1.8] ja-strict">
                {term.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
