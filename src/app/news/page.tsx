"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";

type CategoryFilter = "All" | "Conference" | "Exhibition" | "Contract";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = ["All", "Conference", "Exhibition", "Contract"];

  const filteredArticles =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  const getCategoryColor = (category: "Conference" | "Exhibition" | "Contract") => {
    switch (category) {
      case "Conference":
        return "text-blue-600 bg-blue-50";
      case "Exhibition":
        return "text-purple-600 bg-purple-50";
      case "Contract":
        return "text-emerald-600 bg-emerald-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  } as const;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about EchoSensing's latest developments, partnerships, and global activities in SAR satellite technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.div key={article.slug} variants={itemVariants}>
                  <Link href={`/news/${article.slug}`}>
                    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                      {/* Image Container */}
                      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                        {article.images.length > 0 && (
                          <Image
                            src={article.images[0]}
                            alt={article.title.en}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col">
                        {/* Category Tag */}
                        <div className="mb-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                              article.category
                            )}`}
                          >
                            {article.category}
                          </span>
                        </div>

                        {/* Date */}
                        <p className="text-gray-500 text-sm mb-2">
                          {article.dateLabel.en}
                        </p>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3 flex-1 group-hover:text-blue-600 transition-colors">
                          {article.title.en}
                        </h3>

                        {/* Summary */}
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {article.summary.en}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">
                  No articles found for this category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
