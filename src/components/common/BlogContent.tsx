"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/BlogContent.module.css";

interface BlogContentProps {
  content: string;
}

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // クライアントサイドでのみコンテンツを表示するためのstate
  const [mounted, setMounted] = useState(false);

  // クライアントサイドでマウント後にコンテンツを表示
  useEffect(() => {
    setMounted(true);
  }, []);

  // iframelyのスクリプトを読み込む
  useEffect(() => {
    if (mounted && content.includes("iframely")) {
      const script = document.createElement("script");
      script.src = "//cdn.iframe.ly/embed.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [mounted, content]);

  // HTMLをクライアントサイドのみでレンダリング
  const renderContent = () => {
    if (!mounted) return null;

    return (
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <div className="blog-content-container">
      {/* マウント後に実際のコンテンツを表示 */}
      {mounted ? (
        renderContent()
      ) : (
        // スケルトンローダー
        <div className={styles.skeletonContainer}>
          {/* 見出しのスケルトン */}
          <div
            className={`${styles.skeletonItem} ${styles.skeletonTitle}`}
          ></div>

          {/* 段落のスケルトン */}
          <div className="space-y-2">
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-full`}
            ></div>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-5/6`}
            ></div>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-full`}
            ></div>
          </div>

          {/* 小見出しとコンテンツのスケルトン */}
          <div
            className={`${styles.skeletonItem} ${styles.skeletonHeading}`}
          ></div>
          <div className="space-y-2">
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-full`}
            ></div>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-full`}
            ></div>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-4/5`}
            ></div>
          </div>

          {/* もう一つの小見出しとコンテンツのスケルトン */}
          <div
            className={`${styles.skeletonItem} ${styles.skeletonHeading}`}
          ></div>
          <div className="space-y-2">
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-full`}
            ></div>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText} w-3/4`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
