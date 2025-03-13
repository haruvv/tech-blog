"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          Tech Blog
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
        </div>
      </div>
    </motion.nav>
  );
};
