import { Hero } from "@/components/common/Hero";
import { LatestArticles } from "@/components/common/LatestArticles";
import { getBlogs } from "@/lib/microcms";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function Home() {
  // 最新の3件の記事を取得
  const { blogs } = await getBlogs(0, 3);

  return (
    <>
      <Hero />
      <LatestArticles blogs={blogs} />
    </>
  );
}
