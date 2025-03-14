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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M8 2c4 0 8 1.7 8 6l-.2.4C18.3 7.8 20 9 20 12c0 1.3-.4 2.3-1 3" />
            <path d="M16 18c-1.9 1.5-4.3 2-7.5 2A9.1 9.1 0 0 1 4 22" />
            <path d="M4 14.5c0-1.6.4-2.8 1-3.7" />
            <path d="M2 12a10 10 0 0 0 16.5-8" />
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
