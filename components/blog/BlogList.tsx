"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/types";

interface BlogListProps {
  featured: BlogPost;
  rest: BlogPost[];
}

export default function BlogList({ featured, rest }: BlogListProps) {
  return (
    <div className="space-y-16">
      {/* Featured post */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BlogCard post={featured} featured />
        </motion.div>
      </div>

      {/* All posts */}
      <div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}