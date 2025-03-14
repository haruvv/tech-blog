import { getBlogs } from "@/lib/microcms";
import { BlogList } from "@/components/common/BlogList";

export const dynamic = "force-static";
export const revalidate = 3600; // 1時間ごとに再検証

export default async function BlogsPage() {
  const { blogs, totalCount } = await getBlogs(0, 100);

  return <BlogList blogs={blogs} totalCount={totalCount} />;
}
