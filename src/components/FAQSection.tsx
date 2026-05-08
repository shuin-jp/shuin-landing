"use client";

import { useState } from "react";

/**
 * 朱印 ─ FAQ セクション
 *
 * Responsibility と SaaS Roadmap の間に配置。
 * 朱印商人候補がよく抱く8つの懸念に、媚びず・煽らず・誠実に答える。
 *
 * UX 5段階モデル「コンテンツ内容（C2）」のヒューリスティック改善対応。
 */

interface FAQItem {
  question: string;
  answer: string[];
}

const faqs: FAQItem[] = [
  {
    question: "朱印は誰でも買えますか？",
    answer: [
      "朱印は1号あたり先着10名様までの限定販売です。選別審査はありません。",
      "ただし、朱印は副業層を「事業主に変える」覚悟を持った方に向けて設計されています。",
      "「誰でも簡単に稼げる」という商品ではありません。事業を構築する意思のある方にのみ、お渡ししたいと考えています。",
    ],
  },
  {
    question: "コードを買えば必ず売れますか？",
    answer: [
      "売れません、と明言します。",
      "朱印が提供するのは、海外で実証された完成コードと運用伴走までです。販売・マーケティング・顧客獲得は、すべて朱印商人ご自身の責任範疇です。",
      "「必ず売れる」と言う商材は、構造的に嘘をついています。朱印は誠実であるために、その嘘をつきません。",
    ],
  },
  {
    question: "30分の伴走で本当に立ち上げられますか？",
    answer: [
      "ある程度の PC 操作スキルがある方なら、30分の Zoom 伴走 + デプロイマニュアルで立ち上げ可能です。",
      "Vercel / Supabase / GitHub のアカウント作成は事前にお願いしています。",
      "コーディング経験ゼロの方は、立ち上げに追加で数時間〜半日かかる場合があります。永年LINE伴走で随時サポートします。",
    ],
  },
  {
    question: "永年LINE伴走とは具体的にどこまでですか？",
    answer: [
      "事業継続中の朱印商人として、運営に関する質疑応答を生涯にわたり継続します。",
      "目安は月数回までの相談を無償でお受けします。即時対応は保証しません（24-72時間以内に回答）。",
      "なお「永年」とは事業継続期間を指し、無期限の役務提供を保証するものではありません。停止条件は朱印商人契約書 第8条に明記しています。",
    ],
  },
  {
    question: "返金は可能ですか？",
    answer: [
      "デジタル商材の性質上、原則として商品引き渡し後の返金は受け付けていません。",
      "例外として、当方の重大な瑕疵による不履行（主要機能が決済3営業日以内に提供されない等）の場合は、購入後14日以内の申し出で全額返金します。",
      "「思っていたのと違った」「売れなかった」を理由とした返金には応じません。詳細は返金ポリシーをご覧ください。",
    ],
  },
  {
    question: "他の朱印商人と競合しませんか？",
    answer: [
      "同一の SaaS コードを最大10名の朱印商人に提供するため、構造的には非独占の販売権です。",
      "1号あたり10名上限により、過度な共食いを防いでいます。",
      "中長期的には、地理（関東/関西等）・業種（美容/飲食/士業等）・機能軸での販売制限システムを導入し、住み分けをさらに精緻化する計画です。",
    ],
  },
  {
    question: "朱印を運営しているのは誰ですか？",
    answer: [
      "朱印は個人事業主が運営する屋号です。代表者は外資系コンサルティングファームで経営戦略コンサルタントとしてのキャリアを歩み、企業の事業構造そのものを設計する仕事に従事してきました。",
      "並行して、ここ直近の数年は最先端のAIを徹底的に学び、AIエージェントの実装を副業として自らの手で積み上げてきました。",
      "戦略の構造を見抜く眼と、AIで実装まで届ける手 ─ その両方を握っています。",
    ],
  },
  {
    question: "副業から始めても大丈夫ですか？",
    answer: [
      "むしろ朱印は副業層を中心ターゲットに設計されています。",
      "朱印船貿易のメタファーが示すように、本業を持ちながら副業で「異国の武器」を運ぶ商人になる ─ それが朱印の本質です。",
      "ただし、副業が事業として育つには時間と労力の継続投資が必要です。「楽して稼げる」を求める方には朱印は向きません。",
    ],
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-sumi-soft py-32 sm:py-40 px-6 sm:px-10"
    >
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <p className="font-mincho text-sm text-asagi tracking-[0.4em] mb-6">─ FAQ ─</p>
          <h2 className="font-mincho text-3xl sm:text-4xl md:text-5xl text-washi tracking-wider leading-[1.4] ja-balance">
            <span className="ja-phrase">朱印を授かる前に、</span>
            <span className="ja-phrase">よく聞かれること。</span>
          </h2>
          <p className="font-mincho text-sm sm:text-base text-washi/55 leading-[1.9] mt-6 max-w-xl mx-auto ja-balance">
            <span className="ja-phrase">媚びず、</span>
            <span className="ja-phrase">煽らず、</span>
            <span className="ja-phrase">誠実に答える。</span>
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-washi/10 rounded-sm overflow-hidden bg-sumi/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 text-left hover:bg-sumi/60 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="flex items-start gap-3 flex-1">
                    <span className="font-mincho text-vermillion text-lg sm:text-xl shrink-0 leading-tight">
                      問{(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-mincho text-base sm:text-lg text-washi tracking-wide leading-[1.6] ja-strict">
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className="font-mincho text-xl text-vermillion shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                    aria-hidden="true"
                  >
                    ＋
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 space-y-3 border-t border-washi/5">
                      {faq.answer.map((line, j) => (
                        <p
                          key={j}
                          className="font-mincho text-sm sm:text-base text-washi/75 leading-[1.9] ja-strict"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-center font-mincho text-sm text-washi/50 tracking-widest ja-balance">
          <span className="ja-phrase">─ ご不明な点は </span>
          <a
            href="https://lin.ee/T0CHghs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-asagi hover:text-vermillion transition-colors underline"
          >
            LINE 公式アカウント
          </a>
          <span className="ja-phrase"> までお問い合わせください ─</span>
        </p>
      </div>
    </section>
  );
}
