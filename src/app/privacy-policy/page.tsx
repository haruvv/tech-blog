import { Container } from "@/components/common/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Haru Tech Blogのプライバシーポリシーについての説明です。当サイトで収集する情報と利用目的について記載しています。",
  openGraph: {
    title: "プライバシーポリシー | Haru Tech Blog",
    description:
      "Haru Tech Blogのプライバシーポリシーについての説明です。当サイトで収集する情報と利用目的について記載しています。",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          プライバシーポリシー
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground">最終更新日: 2024年3月15日</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
            <p>
              Haru Tech
              Blog（以下、「当サイト」といいます）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
              このプライバシーポリシーでは、当サイトがどのような情報を収集し、どのように利用するかについて説明します。
              当サイトを利用することにより、このプライバシーポリシーに同意したものとみなされます。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">2. 収集する情報</h2>
            <p>当サイトでは、以下の情報を収集する場合があります：</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                アクセス情報（IPアドレス、ブラウザの種類、参照元URL、アクセス日時など）
              </li>
              <li>利用端末情報（デバイスの種類、OS情報など）</li>
              <li>
                ウェブサイト上での行動履歴（閲覧したページ、滞在時間など）
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Google Analyticsの利用について
            </h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Google
              Analytics」を使用しています。 Google
              Analyticsはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-4">
              Cookieを無効にすることで、Google
              Analyticsによる情報収集を拒否することができます。
              Cookieを無効にする方法は、お使いのブラウザのヘルプをご覧ください。
            </p>
            <p className="mt-4">
              Google
              Analyticsの利用規約及びプライバシーポリシーに関する詳細は、以下のリンクをご覧ください。
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <a
                  href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Analyticsサービス利用規約
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Googleプライバシーポリシー
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">4. 情報の利用目的</h2>
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>当サイトの利用状況の分析</li>
              <li>当サイトのコンテンツ改善</li>
              <li>ユーザーエクスペリエンスの向上</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">5. 情報の第三者提供</h2>
            <p>
              当サイトは、以下の場合を除き、収集した情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
              </li>
              <li>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. アクセス解析ツールについて
            </h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Google
              Analytics」を利用しています。 このGoogle
              Analyticsはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-4">
              この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
              この規約に関して、詳しくは
              <a
                href="https://www.google.com/analytics/terms/jp.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mx-1"
              >
                Google Analyticsサービス利用規約
              </a>
              や
              <a
                href="https://policies.google.com/technologies/ads?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mx-1"
              >
                Googleポリシーと規約
              </a>
              をご覧ください。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. プライバシーポリシーの変更
            </h2>
            <p>
              当サイトは、必要に応じて、このプライバシーポリシーの内容を変更することがあります。
              変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">8. お問い合わせ</h2>
            <p>
              当サイトのプライバシーポリシーに関するお問い合わせは、以下の方法でお願いします。
            </p>
            <p className="mt-4">
              サイト管理者: Haru
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/haruvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://github.com/haruvv
              </a>
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
