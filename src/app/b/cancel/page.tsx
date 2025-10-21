// src/app/b/cancel/page.tsx
// Отмена брони

import Link from "next/link";
import { CancelForm } from "./cancel-form";

interface PageProps {
  searchParams: Promise<{ bookingId?: string }>;
}

export default async function CancelPage({ searchParams }: PageProps) {
  const { bookingId } = await searchParams;

  return (
    <div className="container">
      <Link
        href="/b/select-branch"
        className="label"
        style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
      >
        ← На главную
      </Link>

      <h1 className="window-header" style={{ marginBottom: "8px" }}>
        Отмена записи
      </h1>
      <p className="subtext" style={{ marginBottom: "24px", color: "#6b7280" }}>
        Введите номер брони, чтобы отменить запись
      </p>

      <div
        style={{
          padding: "16px",
          backgroundColor: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      >
        <p className="subtext" style={{ color: "#dc2626" }}>
          ⚠️ Отмена записи необратима. После отмены слот снова станет доступен для бронирования.
        </p>
      </div>

      <CancelForm initialBookingId={bookingId} />
    </div>
  );
}

