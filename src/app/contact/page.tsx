import { Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | TechBlog",
  description: "TechBlog へのお問い合わせはこちらからお願いします。",
};

export default function ContactPage() {
  return (
    <div className="container px-4 py-8 md:py-16">
      <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">
            お問い合わせ
          </h1>
          <p className="text-sm md:text-base text-muted-foreground px-2 md:px-0">
            ご質問やご意見などございましたら、下記の連絡先までお気軽にお問い合わせください。
          </p>
        </div>

        <div className="mx-auto max-w-md rounded-lg border p-4 md:p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h2 className="font-medium">メールでのお問い合わせ</h2>
                <p className="text-sm text-muted-foreground">
                  下記のメールアドレスまでご連絡ください
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-8 text-center sm:text-left mt-2">
              <a
                href="mailto:harutech.contact@gmail.com"
                className="text-primary text-sm md:text-base hover:underline"
              >
                harutech.contact@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-6 md:mt-8">
          <div>
            <Link href="/" className="text-primary hover:underline">
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
