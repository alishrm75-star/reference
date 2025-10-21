// src/app/b/page.tsx
// Главная страница booking - редирект на выбор филиала

import { redirect } from "next/navigation";

export default function BookingIndexPage() {
  redirect("/b/select-branch");
}

