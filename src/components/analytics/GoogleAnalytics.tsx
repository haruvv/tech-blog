"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// グローバル型拡張
declare global {
  interface Window {
    doNotTrack?: string;
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
    doNotTrack?: string;
  }
}

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const [respectDNT, setRespectDNT] = useState(false);

  useEffect(() => {
    // DoNotTrack設定を確認（navigatorプロパティのみを使用）
    const dntEnabled =
      navigator.doNotTrack === "1" || navigator.doNotTrack === "yes";

    setRespectDNT(dntEnabled);
  }, []);

  // DNTが有効な場合はトラッキングを行わない
  if (respectDNT) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
