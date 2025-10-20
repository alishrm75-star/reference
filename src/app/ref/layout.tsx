// src/app/ref/layout.tsx
// Layout для секции /ref - Reference UI
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homi Reference",
  description: "Каталог HTML-снимков Alteg.io для референса",
};

export default function RefLayout({ children }: { children: ReactNode }) {
  return <div className="ref-layout">{children}</div>;
}
