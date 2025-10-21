// src/app/b/cancel/success/page.tsx
// Успешная отмена брони

import Link from "next/link";

export default function CancelSuccessPage() {
  return (
    <div className="container">
      <div
        style={{
          padding: "32px",
          backgroundColor: "#f0fdf4",
          borderRadius: "12px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            margin: "0 auto 16px",
            backgroundColor: "#22c55e",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="window-header" style={{ marginBottom: "8px" }}>
          Запись отменена
        </h1>
        <p className="subtext" style={{ color: "#6b7280" }}>
          Ваша запись успешно отменена. Слот снова доступен для бронирования.
        </p>
      </div>

      <Link
        href="/b/select-branch"
        style={{
          display: "block",
          padding: "14px",
          backgroundColor: "var(--widget-ui-kit-color-brand)",
          color: "#000",
          borderRadius: "8px",
          textAlign: "center",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Создать новую запись
      </Link>
    </div>
  );
}

