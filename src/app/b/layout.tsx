// src/app/b/layout.tsx
// Layout для booking UI - максимально приближен к Altegio

import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/styles/ref.css";

export const metadata: Metadata = {
  title: "Запись онлайн",
  description: "Онлайн-запись к специалисту",
};

export default function BookingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-wrapper">
      {children}
    </div>
  );
}

