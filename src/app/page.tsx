import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { getBlogs } from "./blogs/actions";

export default async function Home() {
  // 最新の3件の記事を取得
  const { blogs } = await getBlogs(0, 3);

  return (
    <Container>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            最新の技術トレンドを
            <br className="hidden sm:inline" />
            <span className="text-primary">わかりやすく解説</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            TechBlogでは、最新の技術トレンドや開発に関する情報を発信しています。
            初心者からプロフェッショナルまで、幅広い読者に向けたコンテンツを提供します。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/blogs">記事一覧を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
          最新の記事
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group block overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="line-clamp-2 text-xl font-semibold group-hover:text-primary">
                {blog.title}
              </h3>
              <div className="mt-4 line-clamp-3 text-sm text-muted-foreground">
                {blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <span>続きを読む</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/blogs">すべての記事を見る</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
