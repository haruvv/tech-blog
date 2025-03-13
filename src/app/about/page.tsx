import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "About | TechBlog",
  description: "テックブログの詳細についてご紹介します",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-8 md:text-5xl">
          About Tech Blog
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">当サイトについて</h2>
            <p className="text-muted-foreground">
              Tech
              Blogは、最新のテクノロジートレンドや開発に関する情報を発信するブログです。
              私たちは、技術の世界の複雑さをわかりやすく解説し、すべての読者が新しい知識を身につけられるようサポートすることを目指しています。
            </p>
            <p className="text-muted-foreground">
              初心者からプロフェッショナルまで、すべての方に価値ある情報を提供できるよう、日々コンテンツの質の向上に努めています。
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">主なトピック</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                プログラミング言語とフレームワーク
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                ウェブ開発とモバイルアプリ開発
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                AI・機械学習の最新動向
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                デベロッパーキャリアと学習リソース
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                オープンソースプロジェクトと貢献方法
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">私たちの信念</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "情報のオープン性",
                description:
                  "技術情報はオープンであるべきだと信じています。私たちは高品質の情報を誰もが利用できるよう努めています。",
              },
              {
                title: "継続的な学習",
                description:
                  "テクノロジーの世界は常に進化しています。私たちは常に最新の情報を学び、読者と共有することを大切にしています。",
              },
              {
                title: "コミュニティ",
                description:
                  "開発者コミュニティの一部であることを誇りに思います。知識の共有と相互学習を通じて、より良い技術エコシステムの構築に貢献します。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border bg-card",
                  "hover:shadow-md transition-all"
                )}
              >
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
