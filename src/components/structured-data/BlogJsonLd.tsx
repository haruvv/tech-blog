type BlogJsonLdProps = {
  title: string;
  description: string;
  publishedAt?: string;
  modifiedAt?: string;
  imageUrl?: string;
  authorName?: string;
  authorUrl?: string;
  url: string;
  siteName?: string;
};

export function BlogJsonLd({
  title,
  description,
  publishedAt,
  modifiedAt,
  imageUrl,
  authorName = "Haru",
  authorUrl = "https://github.com/haruvv",
  url,
  siteName = "Haru Tech Blog",
}: BlogJsonLdProps) {
  // HTMLタグを削除したプレーンテキスト版の説明
  const plainDescription = description
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  // デフォルトのサイトイメージ
  const defaultImage = "https://haruvv.github.io/images/profile.jpg";

  // JSON-LDデータ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: plainDescription,
    image: imageUrl || defaultImage,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://haruvv.github.io/images/profile.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
