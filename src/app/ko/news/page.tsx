"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";

type CategoryFilter = "전체" | "컨퍼런스" | "전시" | "계약";

export default function NewsPageKo() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("전체");

  const categories: CategoryFilter[] = ["전체", "컨퍼런스", "전시", "계약"];

  const categoryMap: Record<CategoryFilter, "Conference" | "Exhibition" | "Contract" | null> = {
    전체: null,
    컨퍼런스: "Conference",
    전시: "Exhibition",
    계약: "Contract",
  };

  const filteredArticles =
    activeCategory === "전체"
      ? newsArticles
      : newsArticles.filter((article) => article.category === categoryMap[activeCategory]);

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
              뉴스
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              에코센싱의 최신 소식, 파트너십, 그리고 SAR 위성 기술 분야의 글로벌 활동을 확인하세요.
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
                  <Link href={`/ko/news/${article.slug}`}>
                    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                      {/* Image Container */}
                      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                        {article.images.length > 0 && (
                          <Image
                            src={article.images[0]}
                            alt={article.title.ko}
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
                            {article.categoryKo}
                          </span>
                        </div>

                        {/* Date */}
                        <p className="text-gray-500 text-sm mb-2">
                          {article.dateLabel.ko}
                        </p>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3 flex-1 group-hover:text-blue-600 transition-colors">
                          {article.title.ko}
                        </h3>

                        {/* Summary */}
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {article.summary.ko}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">
                  이 카테고리에서 찾을 수 있는 기사가 없습니다.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
