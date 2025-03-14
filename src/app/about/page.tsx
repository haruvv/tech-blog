import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About | Haru Tech Blog",
  description: "Haru Tech Blogの運営者とブログの目的についてご紹介します",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-8 md:text-5xl">
          About
        </h1>

        {/* プロフィールセクション */}
        <div className="mb-16 bg-card rounded-xl p-8 border shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="haru"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Haru</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Web開発者 / テックブロガー
              </p>
              <div className="mb-6 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Laravel</Badge>
              </div>
              <p className="text-muted-foreground mb-6">
                こんにちは、Haruです。Web開発を始めて1年目のエンジニアです。
                <br />
                現在はフロントエンドを中心に学んでいて、特にReactやNext.jsに興味があります。
                <br />
                毎日少しずつできることが増えていくのが楽しくて、日々開発を進めながら試行錯誤しています。
                <br />
                このブログでは、自分が学んだことや、つまずいたポイントとその解決法などを記録していきます。
                <br />
                同じように学習中の方々の役に立てば嬉しいです。
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com/haruvv" target="_blank">
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.782 9.492 20.046 9.488 19.192C6.728 19.789 6.139 17.777 6.139 17.777C5.684 16.596 5.021 16.294 5.021 16.294C4.12 15.649 5.097 15.663 5.097 15.663C6.101 15.732 6.636 16.713 6.636 16.713C7.536 18.262 8.935 17.826 9.518 17.574C9.608 16.928 9.864 16.492 10.148 16.251C7.968 16.008 5.669 15.151 5.669 11.297C5.669 10.163 6.073 9.239 6.658 8.519C6.556 8.268 6.194 7.286 6.758 5.969C6.758 5.969 7.604 5.704 9.477 6.939C10.301 6.722 11.169 6.615 12.034 6.611C12.898 6.615 13.766 6.722 14.59 6.939C16.461 5.704 17.307 5.969 17.307 5.969C17.871 7.286 17.509 8.268 17.408 8.519C17.994 9.239 18.395 10.163 18.395 11.297C18.395 15.162 16.09 16.005 13.904 16.244C14.259 16.545 14.575 17.141 14.575 18.048C14.575 19.345 14.563 20.689 14.563 21.017C14.563 21.281 14.722 21.587 15.228 21.486C19.196 20.16 22.059 16.415 22.059 12C22.059 6.477 17.582 2 12.059 2H12Z"
                        fill="currentColor"
                      />
                    </svg>
                    GitHub
                  </Link>
                </Button>
                {/* <Button asChild variant="outline" size="sm">
                  <Link href="https://twitter.com/username" target="_blank">
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.41 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                        fill="currentColor"
                      />
                    </svg>
                    Twitter
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        {/* ブログの詳細 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Haru Tech Blogについて
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                当ブログは私がWeb開発を学ぶ過程で得た知識や経験を共有するブログです。
                特にフロントエンド開発に関する内容が中心になりますが、プログラミング学習全般についても
                書いていく予定です。
              </p>
              <p className="text-muted-foreground">
                このブログでは、初心者の視点から技術的な内容をできるだけ分かりやすく解説していきます。
                自分が躓いたポイントや解決方法、学習リソースの紹介なども含め、
                同じように学習中の方々の手助けになるような情報を提供していきたいと思っています。
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-medium">ブログのコンセプト</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>
                    <strong className="text-foreground">初心者目線</strong> -
                    初めて学ぶ人にも分かりやすい解説を心がけます
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>
                    <strong className="text-foreground">技術トレンド</strong> -
                    稚拙ながらも技術トレンドを紹介します
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>
                    <strong className="text-foreground">学習の記録</strong> -
                    自分の成長過程も含めて共有します
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習中の技術 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">技術スタック</h2>
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {[
              {
                title: "言語/フレームワーク",
                items: ["Laravel", "TypeScript", "Next.js", "Python"],
              },
              {
                title: "DB",
                items: ["MySQL", "PostgreSQL"],
              },
              {
                title: "その他技術",
                items: ["AWS", "Git", "Supabase", "Docker", "Prisma", "Clerk"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border bg-card hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 自己PR */}
        {/* <div className="mb-16 bg-card p-8 rounded-xl border">
          <h2 className="text-2xl font-semibold mb-6">自己PR</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Web開発、特にフロントエンド技術に興味を持ち、日々学習を続けています。
              ReactやNext.jsなどのモダンなフレームワークを使った開発が好きで、
              分かりやすいUI/UXの実装を目指しています。
            </p>
            <p>
              まだまだ学ぶことが多く、経験も浅いですが、楽しく新しい技術を学んでいます。
              このブログを通じて自分の学習内容をアウトプットしながら、
              同時に他の方の参考になるような情報も提供できればと思っています。
            </p>
            <p>
              学生時代に少し学んだプログラミングの基礎と人工知能の知識も活かしながら、
              実際に役立つアプリケーションを作れるようになることが目標です。
            </p>
          </div>
        </div> */}

        {/* お問い合わせセクション */}
        {/* <div className="text-center bg-card p-8 rounded-xl border">
          <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground mb-6">
            ブログに関するご質問、記事のリクエスト、間違いの指摘など、お気軽にご連絡ください。
            一緒に学び、成長していきましょう！
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/contact">お問い合わせページへ</Link>
          </Button>
        </div> */}
      </div>
    </Container>
  );
}
