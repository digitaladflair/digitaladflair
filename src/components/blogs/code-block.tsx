// src/components/CodeBlock.tsx
"use client";

import React from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
  title?: string;
};

export default function CodeBlock({
  children,
  language,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (typeof children === "string") {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
        <span className="font-mono text-xs uppercase tracking-wide">
          {title ?? language ?? "code"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-400" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code area */}
      <motion.pre
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={clsx(
          "overflow-x-auto p-4 text-sm leading-relaxed",
          "font-mono text-zinc-100"
        )}
      >
        {children}
      </motion.pre>
    </div>
  );
}
