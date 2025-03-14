import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { CookieConsent } from "@/components/common/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Haru Tech Blog - Web開発の技術ブログ",
    template: "%s | Haru Tech Blog",
  },
  description:
    "Web開発やプログラミング学習に関する情報を初心者目線で発信するブログです。TypeScript、React、Next.js、Laravelなどの技術トピックを中心に解説しています。",
  keywords: [
    "Web開発",
    "プログラミング",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "テックブログ",
  ],
  authors: [{ name: "Haru", url: "https://github.com/haruvv" }],
  creator: "Haru",
  publisher: "Haru Tech Blog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://haruvv.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haru Tech Blog - Web開発の技術ブログ",
    description:
      "Web開発やプログラミング学習に関する情報を初心者目線で発信するブログです。TypeScript、React、Next.js、Laravelなどの技術トピックを中心に解説しています。",
    url: "https://haruvv.github.io",
    siteName: "Haru Tech Blog",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Haru Tech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haru Tech Blog - Web開発の技術ブログ",
    description:
      "Web開発やプログラミング学習に関する情報を初心者目線で発信するブログです。",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LDを追加するコンポーネント
function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Haru Tech Blog",
          url: "https://haruvv.github.io",
          description:
            "Web開発やプログラミング学習に関する情報を初心者目線で発信するブログです。",
          author: {
            "@type": "Person",
            name: "Haru",
            url: "https://github.com/haruvv",
          },
          inLanguage: "ja-JP",
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {gaId && <GoogleAnalytics measurementId={gaId} />}
          <WebsiteJsonLd />
          <AnalyticsProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
