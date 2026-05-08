# 朱印 LP ─ Stripe 統合のセットアップ手順

**作成日**: 2026-05-09
**現状**: コード骨格は実装済み。npm パッケージのインストールと環境変数設定で稼働可能。

---

## ⚡ クイックスタート（5/12 月曜以降に実行）

### 1. npm パッケージのインストール

```bash
cd /Users/user/work-sideproject/shuin-landing

# Stripe 公式 SDK
npm install stripe @stripe/stripe-js

# Vercel KV（在庫管理用、選択肢A）
npm install @vercel/kv
```

### 2. Stripe アカウント開設

[stripe_setup_guide.md](/Users/user/work-sideproject/docs/stripe_setup_guide.md) の手順に従う。
事業者：朱印（屋号）、運営：個人事業主、メール：shuin.jp.official@gmail.com。

### 3. 環境変数設定（ローカル）

```bash
cp .env.example .env.local
# .env.local を編集して以下を埋める：
#   STRIPE_SECRET_KEY                    （Stripeダッシュボード > API Keys）
#   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY   （同上）
#   STRIPE_WEBHOOK_SECRET                （Webhook 設定後）
#   NEXT_PUBLIC_SITE_URL=http://localhost:3000  （ローカル）
```

### 4. 環境変数設定（Vercel 本番）

Vercel Project Settings → Environment Variables で以下を登録：
- すべての値（テスト用 → 本番用に切り替え）
- `NEXT_PUBLIC_SITE_URL=https://shuin.jp`

### 5. Stripe Product/Price 登録

Stripe ダッシュボード > Products から第N号を登録：

| 項目 | 値 |
|---|---|
| Name | 朱印 第1号 ─ [コードネーム] |
| Description | 海外SaaSクローン完成コード + 朱印商人パッケージ |
| Pricing model | One-time |
| Price | ¥100,000（税込） |
| Tax behavior | Inclusive |

→ 発行された `price_xxxxx` を `src/lib/stripe.ts` の `SHUIN_PRODUCT_PRICES` に追記：

```typescript
export const SHUIN_PRODUCT_PRICES: Record<number, string> = {
  1: "price_1ABCabc",  // 第1号
};
```

### 6. Webhook 設定

Stripe ダッシュボード > Developers > Webhooks > Add endpoint：

- **Endpoint URL**: `https://shuin.jp/api/webhook`
- **Events to listen**:
  - `checkout.session.completed`
  - `payment_intent.payment_failed`
- 発行された Signing secret を `STRIPE_WEBHOOK_SECRET` に設定

### 7. ローカルテスト

```bash
# Stripe CLI インストール
brew install stripe/stripe-cli/stripe

# Stripe CLI ログイン
stripe login

# Webhook をローカルへ転送
stripe listen --forward-to localhost:3000/api/webhook

# 別ターミナルで dev server
npm run dev
```

ブラウザで以下を実行：
1. [LP](http://localhost:3000) で「朱印第1号を授かる」ボタン押下
2. テストカード `4242 4242 4242 4242` で決済
3. `/thanks?session_id=...` ページが表示される
4. ターミナルで Webhook が `checkout.session.completed` 受信

---

## 📁 実装ファイル一覧

| パス | 役割 |
|---|---|
| `src/lib/stripe.ts` | Stripe クライアント、Checkout Session 作成関数 |
| `src/lib/inventory.ts` | 10名上限の在庫管理（Phase 1 = Vercel KV、Phase 2 = Supabase） |
| `src/app/api/checkout/route.ts` | Checkout Session 作成 API |
| `src/app/api/webhook/route.ts` | Stripe Webhook ハンドラ（決済完了処理） |
| `src/app/thanks/page.tsx` | 決済完了後のサンクスページ |
| `.env.example` | 環境変数テンプレート |

---

## 🚧 Phase 1（5/29 第1号〜数号）の TODO

- [ ] `src/components/SaasRoadmapSection.tsx` に「朱印第N号を授かる」ボタンを追加
  - クリック → POST /api/checkout → Stripe Checkout へリダイレクト
- [ ] 朱印商人へのメール送信実装（Resend or SendGrid）
  - 朱印状PDF添付
  - GitHub 招待リンク
  - Calendly URL
  - LINE 公式 友だち追加 URL
- [ ] daiki への通知（Slack Webhook or Discord）
- [ ] 在庫管理 Vercel KV 実装（`src/lib/inventory.ts` の TODO 箇所）
- [ ] 朱印商人マスタ（Supabase or KV）

---

## 🛠️ Phase 2（販売制限システム解放時）の TODO

- [ ] Stripe Payment Element で完全自社統合（Stripe ドメイン遷移なし）
- [ ] 居住地・業種・機能軸の販売制限ロジック
- [ ] リアルタイムダッシュボード（「あと何名様」表示）
- [ ] 朱印商人マスタを Supabase に移行（KV から）

---

## 💰 Stripe 手数料

- 国内カード：3.6%
- 海外カード：3.9%
- 振込手数料：0%（自動振込）

朱印 第1号 ¥100,000 売上時：
- Stripe 手数料：¥3,600
- 手取り：¥96,400

10名上限 × ¥100,000 = ¥1,000,000 売上時：
- Stripe 手数料：¥36,000
- 手取り：¥964,000

---

**Wavy より**：このガイドは 5/12 開業届提出後の Stripe 開設・実装に直接使えます。何か詰まったらいつでも声をかけてください。
