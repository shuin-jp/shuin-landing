import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-sumi-texture"
    >
      {/* 朱印章を右下から大きくはみ出す構図 */}
      <div className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 md:-bottom-48 md:-right-48 lg:-bottom-56 lg:-right-56 pointer-events-none select-none">
        <div className="relative w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] lg:w-[820px] lg:h-[820px] animate-seal-press">
          <Image
            src="/shuin-seal.png"
            alt="朱印"
            fill
            priority
            className="object-contain drop-shadow-[0_0_30px_rgba(230,73,45,0.3)]"
            sizes="(max-width: 640px) 420px, (max-width: 1024px) 680px, 820px"
          />
        </div>
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-20 text-center">
        <p className="font-mincho text-sm sm:text-base text-asagi tracking-[0.3em] mb-8 animate-fade-in-up">
          ─ 朱印 / Shuin ─
        </p>

        <h1 className="font-mincho text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-washi leading-[1.1] tracking-wider animate-fade-in-up delay-200">
          令和の
          <br className="sm:hidden" />
          朱印船。
        </h1>

        <p className="mt-10 sm:mt-12 font-mincho text-xl sm:text-2xl md:text-3xl text-washi/90 tracking-wide animate-fade-in-up delay-400">
          異国の武器を、日本の事業主に授ける。
        </p>

        <div className="mt-16 sm:mt-20 animate-fade-in-up delay-600">
          <a
            href="#story"
            className="inline-flex items-center gap-3 font-mincho text-base sm:text-lg text-washi/70 hover:text-vermillion transition-colors duration-300"
          >
            <span className="tracking-widest">朱印を辿る</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
