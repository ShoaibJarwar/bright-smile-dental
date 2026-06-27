"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, User } from "lucide-react";
import { slideUp } from "@/lib/animations";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.article
        variants={slideUp}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="group grid md:grid-cols-2 rounded-3xl overflow-hidden border bg-white"
        style={{
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Image */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500
                       group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-lg text-xs font-semibold"
              style={{ background: "#EFF6FF", color: "#2563EB" }}
            >
              {post.category}
            </span>
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>

          <h2
            className="font-display font-bold text-2xl leading-tight mb-3
                       group-hover:text-primary-600 transition-colors"
            style={{ color: "var(--text)" }}
          >
            {post.title}
          </h2>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <User size={13} />
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold
                         text-primary-500 hover:text-primary-700 transition-colors
                         group/link"
            >
              Read
              <ArrowRight
                size={14}
                className="transition-transform duration-200
                           group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={slideUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl overflow-hidden border bg-white flex flex-col"
      style={{
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500
                     group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-lg text-xs font-semibold
                       backdrop-blur-sm text-white"
            style={{ background: "rgba(14,165,233,0.85)" }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div
          className="flex items-center gap-3 mb-3 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readTime}
          </span>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>

        <h3
          className="font-display font-bold text-lg leading-snug mb-3 flex-1
                     group-hover:text-primary-600 transition-colors"
          style={{ color: "var(--text)" }}
        >
          {post.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-5 line-clamp-2"
          style={{ color: "var(--text-muted)" }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <User size={12} />
            {post.author}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold
                       text-primary-500 hover:text-primary-700 transition-colors
                       group/link"
          >
            Read
            <ArrowRight
              size={14}
              className="transition-transform duration-200
                         group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}