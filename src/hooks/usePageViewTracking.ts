"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const usePageViewTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      let url = pathname;
      if (searchParams?.toString()) {
        url = `${url}?${searchParams.toString()}`;
      }

      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
        page_path: url,
      });
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
