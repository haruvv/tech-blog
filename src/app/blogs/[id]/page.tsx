import { getBlogById, getBlogs } from "../actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// 静的生成のための設定
export const dynamic = "force-static";
export const revalidate = 3600; // 1時間ごとに再検証

// 静的生成のためのパラメータを生成
export async function generateStaticParams() {
  const { blogs } = await getBlogs(0, 100);
  return blogs.map((blog) => ({
    id: String(blog.id),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <Container className="max-w-4xl">
      <div className="mb-8">
        <Button
          asChild
          variant="ghost"
          className="group mb-4 flex items-center gap-1 p-0 text-muted-foreground hover:text-foreground"
        >
          <Link href="/blogs">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>記事一覧に戻る</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {blog.title}
        </h1>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      <div className="mt-12 border-t pt-6">
        <Button asChild variant="outline">
          <Link href="/blogs">他の記事も読む</Link>
        </Button>
      </div>
    </Container>
  );
}
