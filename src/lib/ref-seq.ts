// src/lib/ref-seq.ts
// Утилиты для работы с ref-seq.json - последовательности и flows

import type { RefSeq, FlowName, PageMeta } from "@/types/ref-seq";
import refSeqData from "@/../ref-seq.json";

/**
 * Получить полные данные ref-seq
 */
export function getRefSeq(): RefSeq {
  return refSeqData as RefSeq;
}

/**
 * Получить все доступные flows
 */
export function getFlows(): string[] {
  const seq = getRefSeq();
  return Object.keys(seq.flows);
}

/**
 * Получить последовательность для указанного flow
 */
export function getFlowSequence(flowName: FlowName = "default"): string[] {
  const seq = getRefSeq();
  
  if (flowName === "default") {
    return seq.defaultFlow;
  }
  
  return seq.flows[flowName] || seq.defaultFlow;
}

/**
 * Получить все slug из всех flows
 */
export function getAllSlugs(): string[] {
  const seq = getRefSeq();
  return seq.meta.map(m => m.slug);
}

/**
 * Получить title для slug
 */
export function getTitle(slug: string): string {
  const seq = getRefSeq();
  const meta = seq.meta.find(m => m.slug === slug);
  return meta?.title || slug;
}

/**
 * Получить предыдущую и следующую страницы в flow
 */
export function getPrevNext(
  slug: string,
  flowName: FlowName = "default"
): {
  prev: PageMeta | null;
  next: PageMeta | null;
  flowName: FlowName;
} {
  const sequence = getFlowSequence(flowName);
  const currentIndex = sequence.indexOf(slug);
  
  if (currentIndex === -1) {
    // Если slug не найден в этом flow, возвращаем null
    return { prev: null, next: null, flowName };
  }
  
  const seq = getRefSeq();
  
  const prevSlug = currentIndex > 0 ? sequence[currentIndex - 1] : null;
  const nextSlug = currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : null;
  
  const prev = prevSlug
    ? seq.meta.find(m => m.slug === prevSlug) || null
    : null;
    
  const next = nextSlug
    ? seq.meta.find(m => m.slug === nextSlug) || null
    : null;
  
  return { prev, next, flowName };
}

/**
 * Получить первую страницу в flow
 */
export function getFirstInFlow(flowName: FlowName): PageMeta | null {
  const sequence = getFlowSequence(flowName);
  if (sequence.length === 0) return null;
  
  const seq = getRefSeq();
  const firstSlug = sequence[0];
  
  return seq.meta.find(m => m.slug === firstSlug) || null;
}

/**
 * Получить человекочитаемое название flow
 */
export function getFlowLabel(flowName: FlowName): string {
  const labels: Record<string, string> = {
    "default": "Все страницы",
    "service-first": "Сначала услуга",
    "master-first": "Сначала мастер",
    "time-first": "Сначала время"
  };
  
  return labels[flowName] || flowName;
}

