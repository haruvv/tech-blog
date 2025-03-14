"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b shadow-sm"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-primary"
          >
            {/* モダンな三角形 */}
            <path d="M6 8 L18 8 L12 14 Z" />

            {/* 垂直線 */}
            <line x1="12" y1="14" x2="12" y2="18" />
          </svg>
          Haru Tech Blog
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/blogs">
            <Button
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary"
            >
              Blog
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary"
            >
              About
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
