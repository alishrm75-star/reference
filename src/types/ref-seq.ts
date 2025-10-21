// src/types/ref-seq.ts
// Типы для ref-seq.json - последовательности экранов и flows

/**
 * Метаданные страницы
 */
export interface PageMeta {
  slug: string;
  title: string;
}

/**
 * Flows - именованные последовательности экранов
 */
export interface Flows {
  "service-first": string[];
  "master-first": string[];
  "time-first"?: string[];
  [key: string]: string[] | undefined;
}

/**
 * Полная структура ref-seq.json
 */
export interface RefSeq {
  version: string;
  generated: string;
  defaultFlow: string[];
  flows: Flows;
  meta: PageMeta[];
}

/**
 * Тип для flow name
 */
export type FlowName = keyof Flows | "default";

