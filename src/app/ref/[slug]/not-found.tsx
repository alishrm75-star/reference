// src/app/ref/[slug]/not-found.tsx
// 404 страница для несуществующих slug в /ref

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Страница не найдена</p>
        <p className="mt-2 text-gray-500">
          Эта страница отсутствует в ref-map.json
        </p>
        <Link
          href="/ref"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent 
                   text-base font-medium rounded-lg text-white bg-blue-600 
                   hover:bg-blue-700 transition-colors"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Вернуться к каталогу
        </Link>
      </div>
    </div>
  );
}

