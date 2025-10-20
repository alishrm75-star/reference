// src/types/ref-map.ts
// Типы для ref-map.json - таблица соответствий страниц референса

/**
 * Запись в ref-map.json
 */
export interface RefMapItem {
  /** URL-friendly идентификатор страницы (используется в /ref/[slug]) */
  slug: string;
  
  /** Читаемое название страницы для UI */
  title: string;
  
  /** Путь к исходному HTML-файлу (относительно корня проекта) */
  srcHtmlPath: string;
  
  /** Оригинальное имя файла (для отладки) */
  file: string;
}

/**
 * Полная карта всех страниц референса
 */
export type RefMap = RefMapItem[];

