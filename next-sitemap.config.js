/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://haruvv.github.io", // サイトのURL
  generateRobotsTxt: true, // robots.txtも生成
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://haruvv.github.io/sitemap.xml"],
  },
  exclude: ["/404", "/500"], // 除外するページ
  generateIndexSitemap: false, // 単一のサイトマップを生成する
  changefreq: "weekly",
  priority: 0.7,
  // ブログ記事は頻繁に更新される可能性があるため、個別に設定
  transform: async (config, path) => {
    if (path.includes("/blogs/")) {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
