// src/lib/ref-map.ts
// Утилиты для работы с ref-map.json

import type { RefMap, RefMapItem } from "@/types/ref-map";
import refMapData from "@/../ref-map.json";

/**
 * Получить полную карту страниц
 */
export function getRefMap(): RefMap {
  return refMapData as RefMap;
}

/**
 * Найти страницу по slug
 */
export function getRefPageBySlug(slug: string): RefMapItem | undefined {
  return getRefMap().find((item) => item.slug === slug);
}

/**
 * Получить предыдущую и следующую страницы для навигации
 */
export function getAdjacentPages(currentSlug: string): {
  prev: RefMapItem | null;
  next: RefMapItem | null;
} {
  const map = getRefMap();
  const currentIndex = map.findIndex((item) => item.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? map[currentIndex - 1] : null,
    next: currentIndex < map.length - 1 ? map[currentIndex + 1] : null,
  };
}

/**
 * Получить URL для просмотра страницы
 */
export function getRefPageUrl(slug: string): string {
  return `/ref/${slug}`;
}

/**
 * Получить URL HTML-файла в iframe
 */
export function getRefHtmlUrl(slug: string): string {
  return `/ref-html/${slug}.html`;
}

