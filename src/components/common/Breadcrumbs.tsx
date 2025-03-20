"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // JSON-LDデータを作成
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": `https://haruvv.github.io${item.href}`,
        name: item.label,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* パンくずリストUI */}
      <nav
        aria-label="パンくずリスト"
        className={cn("flex text-sm", className)}
      >
        <ol className="flex flex-wrap items-center gap-1 md:gap-2">
          {/* ホーム */}
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only md:not-sr-only">ホーム</span>
            </Link>
          </li>

          {/* 区切り */}
          <span className="text-muted-foreground mx-1">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>

          {/* 各アイテム */}
          {items.map((item, index) => (
            <li key={item.href}>
              <div className="flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 mx-1 text-muted-foreground"
                    aria-hidden="true"
                  />
                )}

                {item.isCurrent ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
