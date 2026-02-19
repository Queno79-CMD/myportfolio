"use client";

import { motion, type MotionProps } from "framer-motion";
import type React from "react";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  width = "fit-content",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
} & MotionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ width }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}


