"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton, Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import {
  AnimatedCard,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";

type Blog = {
  id: string;
  title: string;
  content: string;
};

type BlogListProps = {
  blogs: Blog[];
  totalCount: number;
};

export const BlogList = ({ blogs, totalCount }: BlogListProps) => {
  return (
    <div className="bg-muted/40 min-h-screen py-16">
      <Container>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-xl p-8 shadow-md"
          >
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1.5 bg-primary rounded-full" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  BLOG ARCHIVE
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                記事一覧
              </h1>
              <p className="text-muted-foreground text-lg">
                全{totalCount}件の記事があります
              </p>
            </div>

            <div className="w-full h-[1px] bg-border my-8" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
              <div className="flex items-start gap-3">
                <BookOpen className="text-primary mt-1" />
                <p className="text-lg">
                  最新の技術トレンドや開発に関する情報をぜひお読みください。
                </p>
              </div>
              <AnimatedButton
                asChild
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="/" className="flex items-center gap-2">
                  ホームに戻る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </AnimatedButton>
            </div>
          </motion.div>

          <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <AnimatedCard
                key={blog.id}
                className="flex flex-col overflow-hidden border-none shadow-lg bg-background/90 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-1 bg-gradient-to-r from-primary to-primary/30 w-full" />
                <CardHeader className="flex flex-col space-y-2 p-6">
                  <CardTitle className="line-clamp-2 text-xl">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-muted-foreground flex-grow">
                  <p className="line-clamp-3">
                    {blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    className="px-0 text-primary group hover:bg-transparent"
                  >
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="flex items-center gap-1"
                    >
                      続きを読む
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
