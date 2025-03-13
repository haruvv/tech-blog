"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-lg transition-all hover:shadow-xl",
      className
    )}
    ref={ref}
    {...props}
  />
));
Card.displayName = "Card";

const AnimatedCard = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-lg transition-all hover:shadow-xl",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
AnimatedCard.displayName = "AnimatedCard";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    ref={ref}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    className={cn("font-semibold leading-none tracking-tight", className)}
    ref={ref}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  AnimatedCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
