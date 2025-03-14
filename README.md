# Haru Tech Blog

Web開発や技術に関する情報を発信するブログサイトです。

## 技術スタック

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI

## 環境設定

### Google Analytics設定

1. Google Analyticsでプロパティを作成し、測定IDを取得します（G-XYZ...形式）
2. `.env.local`ファイルに以下の内容を追加します：

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=あなたの測定ID（G-XYZ...）
```

3. これにより、自動的にGoogle Analyticsによるトラッキングが有効になります

### 開発環境の構築

```bash
# パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

## デプロイ

このプロジェクトは静的サイトとして出力され、GitHub Pagesにデプロイされます。

```bash
# ビルド
npm run build

# デプロイ（GitHub Actionsにより自動化されています）
npm run deploy
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
