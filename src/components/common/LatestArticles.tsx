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
    <Container>
      <section className="py-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-2xl font-bold tracking-tight md:text-3xl"
        >
          最新の記事
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <AnimatedCard
              key={blog.id}
              className="overflow-hidden"
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <Link href={`/blogs/${blog.id}`} className="group block p-6">
                <h3 className="line-clamp-2 text-xl font-semibold group-hover:text-primary">
                  {blog.title}
                </h3>
                <div className="mt-4 line-clamp-3 text-sm text-muted-foreground">
                  {blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <span>続きを読む</span>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <AnimatedButton asChild variant="outline">
            <Link href="/blogs">すべての記事を見る</Link>
          </AnimatedButton>
        </div>
      </section>
    </Container>
  );
};
