"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 leading-tight"
          >
            Haru Tech Blog
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base md:text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            テクノロジーに関する最新の情報や知見を共有するプラットフォーム
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-5 mt-6"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-lg h-12"
            >
              <Link href="/blogs">記事を読む</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 h-12"
            >
              <Link href="/about">このブログについて</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
