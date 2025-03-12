import { createClient } from "microcms-js-sdk";

// ブログ記事の型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt?: string;
  updatedAt?: string;
};

// レスポンスの型定義
export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

// ブログ一覧を取得する関数
export async function getBlogs(offset = 0, limit = 10) {
  try {
    const response = await client.get<BlogResponse>({
      endpoint: "blogs",
      queries: {
        offset,
        limit,
        fields: ["id", "title", "content", "publishedAt", "updatedAt"],
        orders: "-publishedAt", // 公開日の降順
      },
    });

    return {
      blogs: response.contents,
      totalCount: response.totalCount,
    };
  } catch (error) {
    console.error("Error fetching blogs from microCMS:", error);
    // 静的生成時にエラーが発生した場合はビルドを失敗させないためにデフォルト値を返す
    return {
      blogs: [],
      totalCount: 0,
    };
  }
}

// 特定のブログ記事を取得する関数
export async function getBlogById(id: string) {
  try {
    const blog = await client.get<Blog>({
      endpoint: "blogs",
      contentId: id,
    });

    return blog;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    // 静的生成時にエラーが発生した場合はビルドを失敗させないためにデフォルト値を返す
    return {
      id: "not-found",
      title: "記事が見つかりませんでした",
      content: "<p>お探しの記事は見つかりませんでした。</p>",
    } as Blog;
  }
}
