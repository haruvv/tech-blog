"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Tech Blog
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blogs">
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
