import { LegalLayout, DraftBanner } from "../_components/LegalLayout";

export const metadata = {
  title: "特定商取引法に基づく表記 ─ 朱印",
  description: "朱印（Shuin）の特定商取引法に基づく表記",
};

export default function TokushohoPage() {
  return (
    <>
      <DraftBanner />
      <LegalLayout title="特定商取引法に基づく表記" lastUpdated="2026-MM-DD">
        <table>
          <tbody>
            <tr>
              <th>販売事業者</th>
              <td>朱印（屋号）／ 個人事業主</td>
            </tr>
            <tr>
              <th>運営統括責任者氏名</th>
              <td>
                ご請求があった場合は遅滞なく書面または電子メールにて開示いたします。
                <br />
                <span className="text-xs opacity-60">
                  ※ 特定商取引法第11条上の表記事項。弁護士レビューを経て本ページの最終確定文言を反映する予定です。
                </span>
              </td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                個人情報保護のため、ご請求があった場合は遅滞なく書面または電子メールにて開示いたします。
                <br />
                お問い合わせは下記メールアドレスまでお願いします。
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>ご請求があった場合は遅滞なく開示いたします。</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>shuin.jp.official@gmail.com</td>
            </tr>
            <tr>
              <th>ホームページURL</th>
              <td>https://shuin.jp</td>
            </tr>
            <tr>
              <th>販売価格</th>
              <td>
                各商品ページに表示（税込 ¥100,000〜、号により変動）
              </td>
            </tr>
            <tr>
              <th>商品代金以外の必要料金</th>
              <td>
                ・銀行振込手数料（該当する場合）
                <br />
                ・インターネット接続料金、通信料
                <br />
                ・商品の利用に必要なサーバー・SaaS等の月額料金（購入者負担）
              </td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>
                クレジットカード（Visa / Mastercard / JCB / American Express / Diners）
                <br />
                ※ Stripe決済を利用
              </td>
            </tr>
            <tr>
              <th>支払時期</th>
              <td>注文確定時にクレジットカードにて即時決済</td>
            </tr>
            <tr>
              <th>商品の引き渡し時期</th>
              <td>
                決済完了後、3営業日以内に下記をメールにてご案内：
                <br />
                ① GitHubプライベートリポジトリへの招待 または ZIPダウンロードリンク
                <br />
                ② デプロイマニュアル + ビジネスサイクルマニュアルへのアクセス権
                <br />
                ③ Zoomデプロイ伴走（30分）の予約フォーム
                <br />
                ④ 朱印状（販売権授与証PDF）
              </td>
            </tr>
            <tr>
              <th>返品・キャンセル</th>
              <td>
                デジタル商材の性質上、商品引き渡し後の返品・返金は原則不可。
                詳細は<a href="/legal/refund">返金ポリシー</a>を参照。
              </td>
            </tr>
            <tr>
              <th>動作環境</th>
              <td>
                各商品ページに記載。一般的に以下を想定：
                <br />
                ・Mac / Windows / Linux いずれかのPC
                <br />
                ・Node.js 20+ もしくは指定の実行環境
                <br />
                ・GitHubアカウント
                <br />
                ・対応SaaS（OpenAI、Stripe、Vercel等）のアカウント
              </td>
            </tr>
            <tr>
              <th>販売数量</th>
              <td>
                <strong>各号につき先着10名様まで</strong>（販売期間内に上限到達時は受付終了）
              </td>
            </tr>
            <tr>
              <th>販売期間</th>
              <td>
                各号 金曜21:00 開始 〜 翌週木曜23:59 終了（1週間限定）
              </td>
            </tr>
          </tbody>
        </table>

        <h2>補足</h2>

        <h3>個人住所の非開示について</h3>
        <p>
          特定商取引法施行規則 第23条第8項に基づき、現に活動している営業所の所在地が個人の住居である場合は、購入者からの請求があり次第、遅滞なく書面または電子メールにて開示いたします。
        </p>

        <h3>屋号について</h3>
        <p>
          「朱印」は個人事業主として登録された屋号です。法人ではなく、個人事業主としての販売事業となります。
        </p>

        <h3>消費税について</h3>
        <p>
          当事業者は適格請求書発行事業者（インボイス）には登録しておりません。表示価格はすべて税込です。法人または課税事業者の購入者様におかれましては、消費税の仕入税額控除ができない点をご承知おきください。
        </p>
      </LegalLayout>
    </>
  );
}
