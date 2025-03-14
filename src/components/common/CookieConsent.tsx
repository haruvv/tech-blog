"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // クライアントサイドでのみ実行
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-lg">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            当サイトではGoogle
            Analyticsを使用しており、サイト利用状況の分析のためにCookieを使用しています。
            続けて閲覧することで、
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              プライバシーポリシー
            </Link>
            に同意したものとみなされます。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4 mr-1" />
            閉じる
          </Button>
          <Button size="sm" onClick={acceptCookies}>
            同意する
          </Button>
        </div>
      </div>
    </div>
  );
}
