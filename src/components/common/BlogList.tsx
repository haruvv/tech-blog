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
    <Container>
      <div className="space-y-6 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              記事一覧
            </h1>
            <p className="text-muted-foreground">
              全{totalCount}件の記事があります
            </p>
          </div>

          <div className="w-full h-[1px] bg-border opacity-50 my-6" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <p className="text-lg">
              最新の技術トレンドや開発に関する情報をぜひお読みください。
            </p>
            <AnimatedButton asChild variant="outline">
              <Link href="/">ホームに戻る</Link>
            </AnimatedButton>
          </div>
        </motion.div>

        <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <AnimatedCard
              key={blog.id}
              className="flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
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
                <Button asChild variant="ghost" className="px-0 text-primary">
                  <Link href={`/blogs/${blog.id}`}>続きを読む</Link>
                </Button>
              </CardFooter>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Container>
  );
};
