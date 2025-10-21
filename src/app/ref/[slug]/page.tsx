// src/app/ref/[slug]/page.tsx
// Просмотр HTML-снимка в iframe с навигацией и инструментами

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRefMap,
  getRefPageBySlug,
  getRefPageUrl,
  getRefHtmlUrl,
} from "@/lib/ref-map";
import { getPrevNext, getFlowLabel, type FlowName } from "@/lib/ref-seq";
import { CopyLinkButton } from "./copy-link-button";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ flow?: string }>;
}

// Генерируем статические пути для всех страниц
export function generateStaticParams() {
  const refMap = getRefMap();
  return refMap.map((item) => ({
    slug: item.slug,
  }));
}

// Генерируем метаданные для страницы
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getRefPageBySlug(slug);

  if (!page) {
    return {
      title: "Страница не найдена",
    };
  }

  return {
    title: `${page.title} | Homi Reference`,
    description: `Референс страницы: ${page.title}`,
  };
}

export default async function RefViewPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { flow } = await searchParams;
  
  const page = getRefPageBySlug(slug);

  if (!page) {
    notFound();
  }

  // Получаем flow из query параметра или используем default
  const flowName = (flow as FlowName) || "default";
  const { prev, next, flowName: currentFlow } = getPrevNext(slug, flowName);
  const htmlUrl = getRefHtmlUrl(slug);
  
  // Функция для построения URL с flow
  const buildUrl = (targetSlug: string) => {
    if (flowName === "default") {
      return getRefPageUrl(targetSlug);
    }
    return `${getRefPageUrl(targetSlug)}?flow=${flowName}`;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header with title and navigation */}
      <header className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row: back link */}
          <div className="py-3 border-b border-gray-100">
            <Link
              href="/ref"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 
                       transition-colors"
            >
              <svg
                className="mr-2 h-4 w-4"
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
              Назад к каталогу
            </Link>
          </div>

          {/* Main row: title */}
          <div className="py-4">
            <h1 className="text-2xl font-bold text-gray-900">{page.title}</h1>
            <div className="mt-1 flex items-center gap-3">
              <p className="text-sm text-gray-500 font-mono">{slug}</p>
              {flowName !== "default" && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                  {getFlowLabel(flowName)}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Iframe container */}
      <div className="flex-1 overflow-hidden bg-white">
        <iframe
          src={htmlUrl}
          className="w-full h-full border-0"
          title={page.title}
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>

      {/* Footer toolbar */}
      <footer className="bg-white border-t border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Navigation */}
            <div className="flex items-center gap-3">
              {prev ? (
                <Link
                  href={buildUrl(prev.slug)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 
                           rounded-lg text-sm font-medium text-gray-700 bg-white 
                           hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="mr-2 h-4 w-4"
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
                  Prev
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center px-4 py-2 border border-gray-200 
                           rounded-lg text-sm font-medium text-gray-400 bg-gray-50 
                           cursor-not-allowed"
                >
                  <svg
                    className="mr-2 h-4 w-4"
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
                  Prev
                </button>
              )}

              {next ? (
                <Link
                  href={buildUrl(next.slug)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 
                           rounded-lg text-sm font-medium text-gray-700 bg-white 
                           hover:bg-gray-50 transition-colors"
                >
                  Next
                  <svg
                    className="ml-2 h-4 w-4"
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
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center px-4 py-2 border border-gray-200 
                           rounded-lg text-sm font-medium text-gray-400 bg-gray-50 
                           cursor-not-allowed"
                >
                  Next
                  <svg
                    className="ml-2 h-4 w-4"
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
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <CopyLinkButton slug={slug} />
              
              <a
                href={htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 
                         rounded-lg text-sm font-medium text-gray-700 bg-white 
                         hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Открыть HTML
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

