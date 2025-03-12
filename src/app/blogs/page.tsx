import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogs } from "@/lib/microcms";

export const dynamic = "force-static";
export const revalidate = 3600; // 1時間ごとに再検証

export default async function BlogsPage() {
  const { blogs, totalCount } = await getBlogs(0, 100); // 静的生成のため、一度に全記事を取得

  return (
    <Container>
      <div className="space-y-4">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              記事一覧
            </h1>
            <p className="mt-2 text-muted-foreground">
              全{totalCount}件の記事があります
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">ホームに戻る</Link>
          </Button>
        </div>

        <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col overflow-hidden">
              <CardHeader className="flex flex-col space-y-2 p-6">
                <CardTitle className="line-clamp-2 text-xl">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {blog.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-muted-foreground flex-grow">
                <p className="line-clamp-3">
                  {blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="ghost" className="px-0 text-primary">
                  <Link href={`/blogs/${blog.id}`}>続きを読む</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
