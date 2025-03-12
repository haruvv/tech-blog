import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} TechBlog. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
}
