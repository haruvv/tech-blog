import { getBlogs } from "@/lib/microcms";
import { BlogList } from "@/components/common/BlogList";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 3600; // 1時間ごとに再検証

// メタデータを定義
export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description:
    "Web開発やプログラミング学習に関する記事の一覧です。最新の技術トレンドや開発のTipsを紹介しています。",
  openGraph: {
    title: "ブログ記事一覧 | Haru Tech Blog",
    description:
      "Web開発やプログラミング学習に関する記事の一覧です。最新の技術トレンドや開発のTipsを紹介しています。",
    url: "https://haruvv.github.io/blogs",
    type: "website",
  },
  alternates: {
    canonical: "https://haruvv.github.io/blogs",
  },
};

export default async function BlogsPage() {
  const { blogs, totalCount } = await getBlogs(0, 100);

  // パンくずリストのアイテム
  const breadcrumbItems = [
    { label: "ブログ", href: "/blogs", isCurrent: true },
  ];

  return (
    <Container>
      {/* パンくずリスト */}
      <Breadcrumbs items={breadcrumbItems} className="my-6" />

      <h1 className="text-3xl font-bold tracking-tight mb-6">ブログ記事一覧</h1>
      <BlogList blogs={blogs} totalCount={totalCount} />
    </Container>
  );
}
