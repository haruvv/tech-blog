import React from "react";
import { Container } from "@/components/common/Container";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | 技術ブログ",
  description:
    "お問い合わせフォームです。質問やフィードバックをお送りください。",
};

export default function ContactPage() {
  return (
    <div className="bg-muted/30 py-8 md:py-16 min-h-screen">
      <Container className="max-w-3xl">
        <div className="bg-background rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-5 md:h-6 w-1.5 bg-primary rounded-full" />
                <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
                  CONTACT
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                お問い合わせ
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                ご質問、ご要望、またはフィードバックがございましたら、以下のフォームからお気軽にお問い合わせください。
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
