import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { getBlogById, getBlogs } from "@/lib/microcms";
import { BlogContent } from "@/components/common/BlogContent";

// microCMSのブログ型を定義
type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt?: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
};

// 静的生成のための設定
export const dynamic = "force-static";
export const revalidate = 3600; // 1時間ごとに再検証

// 日付をフォーマットする関数（安定した結果を返す）
function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
}

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
  const blog: Blog | null = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  // 記事の文字数から推定読了時間を計算（1分あたり500文字と仮定）
  // HTMLタグを除去した文字数を計算
  const plainText = blog.content.replace(/<[^>]*>/g, "");
  const wordCount = plainText.length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 500)); // 最低1分

  // 日付を静的にフォーマット
  const formattedDate = formatDate(blog.publishedAt);

  return (
    <div className="bg-muted/30 py-16 min-h-screen">
      <Container className="max-w-4xl">
        <div className="bg-background rounded-xl shadow-lg overflow-hidden mb-8">
          {/* ヘッダー部分 */}
          <div className="relative p-8 border-b">
            {/* アイキャッチ画像 */}
            {blog.eyecatch && (
              <div className="relative w-full h-64 mb-6">
                <Image
                  src={`${blog.eyecatch.url}?w=1200&h=630&fit=crop`}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            )}

            <Button
              asChild
              variant="ghost"
              className="group mb-6 flex items-center gap-1 p-0 text-muted-foreground hover:text-primary"
            >
              <Link href="/blogs">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>記事一覧に戻る</span>
              </Link>
            </Button>

            <div className="space-y-4">
              {/* アクセントバーとラベル */}
              <div className="flex items-center gap-2">
                <div className="h-6 w-1.5 bg-primary rounded-full" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  ARTICLE
                </span>
              </div>

              {/* タイトル */}
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {blog.title}
              </h1>

              {/* メタ情報 */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                {formattedDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>約{readingTime}分で読めます</span>
                </div>
              </div>
            </div>
          </div>

          {/* 記事コンテンツ - クライアントコンポーネントを使用 */}
          <div className="p-8">
            <BlogContent content={blog.content} />
          </div>
        </div>

        {/* 関連セクション */}
        <div className="bg-background rounded-xl shadow-md p-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                他の記事もチェックしませんか？
              </h3>
              <p className="text-muted-foreground">
                もっと多くの技術情報や開発トピックをご覧いただけます
              </p>
            </div>
            <Button asChild className="rounded-full px-6">
              <Link href="/blogs" className="flex items-center gap-2">
                記事一覧を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
