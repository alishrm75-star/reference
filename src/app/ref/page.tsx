// src/app/ref/page.tsx
// Каталог всех страниц референса с поиском и фильтрацией

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getRefMap, getRefPageUrl } from "@/lib/ref-map";

export default function RefIndexPage() {
  const refMap = getRefMap();
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по поисковому запросу
  const filteredPages = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return refMap;

    return refMap.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.slug.toLowerCase().includes(query)
      );
    });
  }, [refMap, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Homi Reference</h1>
          <p className="mt-2 text-sm text-gray-600">
            Каталог HTML-снимков Alteg.io · {refMap.length} страниц
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <label htmlFor="search" className="sr-only">
            Поиск по названию или slug
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Поиск по названию или slug..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-gray-900 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {searchQuery && (
            <div className="mt-3 text-sm text-gray-600">
              Найдено: {filteredPages.length} из {refMap.length}
            </div>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredPages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Ничего не найдено</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Сбросить поиск
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPages.map((item) => (
              <Link
                key={item.slug}
                href={getRefPageUrl(item.slug)}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 
                         hover:shadow-md hover:border-blue-300 transition-all duration-200
                         overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 
                               transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 font-mono break-all">
                    {item.slug}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center text-sm text-blue-600 group-hover:text-blue-700 
                                font-medium">
                    <span>Открыть</span>
                    <svg
                      className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

