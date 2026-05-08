import { linkItems } from "@/data/links";

export function LinksSection() {
  const primary = linkItems.filter((l) => l.emphasis === "primary");
  const secondary = linkItems.filter((l) => l.emphasis !== "primary");

  return (
    <section
      id="links"
      className="relative bg-sumi py-32 sm:py-40 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-20">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">
            ─ CONNECT ─
          </p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4]">
            朱印に、繋がる。
          </h2>
        </header>

        {/* 第一層：LINE 公式（最強誘導） */}
        <div className="mb-12">
          {primary.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-2 border-vermillion bg-vermillion/5 hover:bg-vermillion/15 transition-all duration-300 rounded-sm p-8 sm:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-mincho text-2xl sm:text-3xl text-vermillion tracking-wider mb-2">
                    {link.name}
                  </h3>
                  {link.description && (
                    <p className="font-mincho text-sm sm:text-base text-washi/80 leading-relaxed">
                      {link.description}
                    </p>
                  )}
                </div>
                <svg
                  className="w-6 h-6 text-vermillion group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* 第二層：その他 SNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {secondary.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-washi/15 bg-sumi-soft/40 hover:border-asagi hover:bg-sumi-soft transition-all duration-300 rounded-sm p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-mincho text-base sm:text-lg text-washi tracking-wider mb-1">
                    {link.name}
                  </h3>
                  {link.description && (
                    <p className="font-mincho text-xs sm:text-sm text-washi/60 leading-relaxed">
                      {link.description}
                    </p>
                  )}
                </div>
                <svg
                  className="w-4 h-4 text-washi/40 group-hover:text-asagi group-hover:translate-x-1 transition-all flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-16 text-center font-mincho text-sm text-washi/50 tracking-widest">
          ─ 異国の武器を、日本の事業主に授ける ─
        </p>
      </div>
    </section>
  );
}
