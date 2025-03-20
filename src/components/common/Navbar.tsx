"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 ${
          scrolled
            ? "bg-background/50 backdrop-blur-md border-b shadow-sm"
            : "bg-transparent border-transparent"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold tracking-tight text-primary flex items-center gap-2"
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
            <span className="md:hidden text-ms">Haru Tech Blog</span>
            <span className="hidden md:inline text-sm lg:text-base">
              Haru Tech Blog
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center gap-2">
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
            <Link href="/contact">
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
              >
                Contact
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-1"
            >
              {/* SVGを直接使用してインポートの問題を回避 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 pt-16 backdrop-blur-md">
          <div className="flex flex-col items-center gap-4 p-4">
            <Link href="/blogs" onClick={() => setMenuOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-center hover:bg-primary/10 hover:text-primary"
                size="lg"
              >
                Blog
              </Button>
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-center hover:bg-primary/10 hover:text-primary"
                size="lg"
              >
                About
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-center hover:bg-primary/10 hover:text-primary"
                size="lg"
              >
                Contact
              </Button>
            </Link>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setMenuOpen(false)}
            >
              閉じる
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
