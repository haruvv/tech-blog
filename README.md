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

### カスタムイベントトラッキング

カスタムイベントを追跡するには、`useAnalyticsEvent`フックを使用します：

```tsx
import { useAnalyticsEvent } from '@/hooks/useAnalyticsEvent';

function YourComponent() {
  const { trackArticleView, trackLinkClick } = useAnalyticsEvent();

  // 記事閲覧を記録
  useEffect(() => {
    trackArticleView('article-123', '記事タイトル');
  }, []);

  // リンククリックを記録
  const handleExternalLinkClick = () => {
    trackLinkClick('GitHub', 'external', 'https://github.com/...');
  };

  return (
    // ...
  );
}
```

### プライバシー対応

このサイトはDoNotTrack（DNT）信号に対応しており、ユーザーのブラウザで有効になっている場合、Google Analyticsによるトラッキングは行われません。また、IPアドレスの匿名化も有効化しています。

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
