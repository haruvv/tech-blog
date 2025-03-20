import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2 md:pl-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} TechBlog. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:harutech.contact@gmail.com"
              className="hover:text-foreground"
            >
              harutech.contact@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pr-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ホーム
          </Link>
          <Link
            href="/blogs"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            記事一覧
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
