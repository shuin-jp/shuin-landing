"use client";

import { useEffect, useState } from "react";
import {
  saasRoadmap,
  statusLabel,
  timeUntilLaunch,
  type SaasItem,
} from "@/data/saas-roadmap";

function formatLaunchDate(iso: string): string {
  const d = new Date(iso);
  // JST
  const opts: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  };
  return new Intl.DateTimeFormat("ja-JP", opts).format(d);
}

function CountdownDisplay({ launchDate }: { launchDate: string }) {
  const [remaining, setRemaining] = useState(() => timeUntilLaunch(launchDate));

  useEffect(() => {
    const tick = () => setRemaining(timeUntilLaunch(launchDate));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [launchDate]);

  if (remaining.isPast) {
    return (
      <p className="font-mincho text-vermillion text-2xl tracking-wider">
        ─ 出航済み ─
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
      {[
        { label: "日", value: remaining.days },
        { label: "時", value: remaining.hours },
        { label: "分", value: remaining.minutes },
        { label: "秒", value: remaining.seconds },
      ].map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="font-mincho text-3xl sm:text-5xl md:text-6xl text-vermillion font-bold tabular-nums leading-none">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="font-mincho text-xs sm:text-sm text-washi/60 mt-2 tracking-widest">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function CurrentSaasCard({ item }: { item: SaasItem }) {
  return (
    <div className="border border-vermillion/40 rounded-sm bg-sumi p-8 sm:p-12 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-vermillion/5 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block px-3 py-1 bg-vermillion text-washi text-xs tracking-widest font-mincho rounded-sm">
            {statusLabel[item.status]}
          </span>
          <span className="font-mincho text-sm text-washi/60 tracking-widest">
            最新の朱印
          </span>
        </div>

        <h3 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi mb-3 tracking-wider">
          朱印 第{item.number}号
          {item.codename && (
            <span className="text-vermillion ml-3">─ {item.codename}</span>
          )}
        </h3>

        <p className="font-mincho text-base sm:text-lg text-washi/70 mb-8 leading-relaxed ja-strict">
          {item.description}
        </p>

        <div className="border-t border-washi/10 pt-8 mb-8">
          <p className="font-mincho text-sm text-asagi tracking-widest mb-2">
            出航予定
          </p>
          <p className="font-mincho text-lg sm:text-xl text-washi mb-8">
            {formatLaunchDate(item.launchDate)}
          </p>
          <CountdownDisplay launchDate={item.launchDate} />
        </div>

        {item.price && (
          <p className="font-mincho text-sm text-washi/60 tracking-widest text-center">
            ¥{item.price.toLocaleString()} 買い切り ／ 1週間限定販売
          </p>
        )}
      </div>
    </div>
  );
}

function UpcomingCard({ item }: { item: SaasItem }) {
  return (
    <div className="border border-washi/15 rounded-sm bg-sumi/60 p-6 sm:p-8 hover:border-asagi/40 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-mincho text-xl sm:text-2xl text-washi tracking-wider">
          朱印 第{item.number}号
        </h4>
        <span className="font-mincho text-xs text-washi/50 tracking-widest">
          {statusLabel[item.status]}
        </span>
      </div>
      <p className="font-mincho text-sm text-washi/60 tracking-wide leading-relaxed mb-3 ja-strict">
        {item.description}
      </p>
      <p className="font-mincho text-xs text-asagi tracking-widest">
        {formatLaunchDate(item.launchDate)}
      </p>
    </div>
  );
}

export function SaasRoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative bg-sumi py-32 sm:py-40 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-20">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">
            ─ ROADMAP ─
          </p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4] ja-balance">
            <span className="ja-phrase">出航待ちの、</span>
            <span className="ja-phrase">朱印たち。</span>
          </h2>
          <p className="mt-6 font-mincho text-base sm:text-lg text-washi/70 leading-relaxed ja-balance">
            <span className="ja-phrase">毎週金曜21:00、</span>
            <span className="ja-phrase">新たな朱印が出航する。</span>
            {" "}
            <span className="ja-phrase">1週間限定販売、</span>
            <span className="ja-phrase">終了後は完全停止。</span>
          </p>
        </header>

        {/* 現在進行中（最も大きく表示） */}
        <div className="mb-16">
          <CurrentSaasCard item={saasRoadmap.current} />
        </div>

        {/* 次回以降の予告 */}
        {saasRoadmap.upcoming.length > 0 && (
          <div>
            <h3 className="font-mincho text-lg sm:text-xl text-asagi tracking-widest mb-8 text-center">
              ─ 次なる朱印 ─
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {saasRoadmap.upcoming.map((item) => (
                <UpcomingCard key={item.number} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* リリース済み（あれば） */}
        {saasRoadmap.released.length > 0 && (
          <div className="mt-20">
            <h3 className="font-mincho text-lg sm:text-xl text-washi/50 tracking-widest mb-8 text-center">
              ─ 過去の朱印（販売終了） ─
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {saasRoadmap.released.map((item) => (
                <UpcomingCard key={item.number} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
