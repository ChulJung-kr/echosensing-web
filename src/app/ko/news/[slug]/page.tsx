"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";

export default function NewsDetailPageKo() {
  const params = useParams();
  const slug = params?.slug as string;

  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              기사를 찾을 수 없습니다
            </h1>
            <p className="text-gray-600 mb-8">
              죄송합니다. 찾으시는 기사가 없습니다.
            </p>
            <Link
              href="/ko/news"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              뉴스 목록으로
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

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

  return (
    <div className="w-full bg-white">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/ko/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span className="mr-2">←</span>
            뉴스 목록으로
          </Link>
        </motion.div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        {article.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-96 rounded-lg overflow-hidden mb-12 shadow-lg"
          >
            <Image
              src={article.images[0]}
              alt={article.title.ko}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          {/* Category Tag */}
          <div className="mb-4">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(
                article.category
              )}`}
            >
              {article.categoryKo}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                날짜
              </p>
              <p className="text-lg">{article.dateLabel.ko}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                위치
              </p>
              <p className="text-lg">{article.location.ko}</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title.ko}
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-600 leading-relaxed">
            {article.summary.ko}
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div className="space-y-6">
            {article.content.ko.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        {article.images.length > 1 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">갤러리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`갤러리 이미지 ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </article>

      {/* Related News Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            더 많은 뉴스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/ko/news/${relatedArticle.slug}`}>
                  <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                    <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
                      {relatedArticle.images.length > 0 && (
                        <Image
                          src={relatedArticle.images[0]}
                          alt={relatedArticle.title.ko}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <p className="text-gray-500 text-sm mb-2">
                        {relatedArticle.dateLabel.ko}
                      </p>
                      <h3 className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedArticle.title.ko}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
