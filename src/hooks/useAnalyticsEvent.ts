"use client";

/**
 * Google Analyticsカスタムイベント送信フック
 *
 * ブログ記事の閲覧、リンククリック、ボタン操作など特定のアクションを
 * Google Analyticsでトラッキングするために使用します。
 */
export const useAnalyticsEvent = () => {
  /**
   * カスタムイベントをGoogle Analyticsに送信する
   * @param eventName イベント名
   * @param eventParams イベントパラメータ
   */
  const sendEvent = (
    eventName: string,
    eventParams?: Record<string, string | number | boolean>
  ) => {
    if (window.gtag && typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  };

  /**
   * 記事閲覧イベントの送信
   * @param articleId 記事ID
   * @param articleTitle 記事タイトル
   */
  const trackArticleView = (articleId: string, articleTitle: string) => {
    sendEvent("article_view", {
      article_id: articleId,
      article_title: articleTitle,
    });
  };

  /**
   * リンククリックイベントの送信
   * @param linkName リンク名
   * @param linkType リンクタイプ（内部/外部）
   * @param linkUrl リンクURL
   */
  const trackLinkClick = (
    linkName: string,
    linkType: "internal" | "external",
    linkUrl: string
  ) => {
    sendEvent("link_click", {
      link_name: linkName,
      link_type: linkType,
      link_url: linkUrl,
    });
  };

  /**
   * 検索イベントの送信
   * @param searchTerm 検索語句
   * @param resultsCount 検索結果数
   */
  const trackSearch = (searchTerm: string, resultsCount: number) => {
    sendEvent("search", {
      search_term: searchTerm,
      results_count: resultsCount,
    });
  };

  return {
    sendEvent,
    trackArticleView,
    trackLinkClick,
    trackSearch,
  };
};
