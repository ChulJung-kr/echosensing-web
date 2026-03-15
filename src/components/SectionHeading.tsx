"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  tag,
  title,
  description,
}: {
  tag?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 rounded-full mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
