"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const usePageViewTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // クライアントサイドでのみ実行し、かつpathname存在時のみ
    if (pathname && typeof window !== "undefined" && window.gtag) {
      try {
        let url = pathname;
        // searchParamsが存在する場合のみ追加
        if (searchParams && typeof searchParams.toString === "function") {
          const paramString = searchParams.toString();
          if (paramString) {
            url = `${url}?${paramString}`;
          }
        }

        window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
          page_path: url,
        });
      } catch (error) {
        // エラーが発生しても通常のページレンダリングに影響しないよう処理
        console.error("Analytics tracking error:", error);
      }
    }
  }, [pathname, searchParams]);
};

// グローバルウィンドウオブジェクトに gtag 関数の型を追加
declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
