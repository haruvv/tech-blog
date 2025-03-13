"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { AnimatedCard } from "@/components/ui/card";

type Blog = {
  id: string;
  title: string;
  content: string;
};

type LatestArticlesProps = {
  blogs: Blog[];
};

export const LatestArticles = ({ blogs }: LatestArticlesProps) => {
  return (
    <div className="bg-muted/30">
      <Container>
        <section className="py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-10 bg-primary rounded-full" />
                <span className="text-primary font-medium text-sm">
                  LATEST ARTICLES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                最新の記事
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 md:mt-0"
            >
              <AnimatedButton
                asChild
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="/blogs">
                  <span className="flex items-center gap-2">
                    すべての記事を見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </AnimatedButton>
            </motion.div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <AnimatedCard
                key={blog.id}
                className="overflow-hidden border-none shadow-lg"
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                <Link href={`/blogs/${blog.id}`} className="group block p-6">
                  <h3 className="line-clamp-2 text-xl font-semibold group-hover:text-primary">
                    {blog.title}
                  </h3>
                  <div className="mt-4 line-clamp-3 text-muted-foreground">
                    {blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
                  </div>
                  <div className="mt-6 flex items-center text-sm text-primary/80 font-medium group-hover:text-primary transition-colors">
                    <span className="mr-2">続きを読む</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};
