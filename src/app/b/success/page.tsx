// src/app/b/success/page.tsx
// Успешное создание брони

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface PageProps {
  searchParams: Promise<{ bookingId?: string }>;
}

export default async function SuccessPage({ searchParams }: PageProps) {
  const { bookingId } = await searchParams;

  if (!bookingId) {
    redirect("/b/select-branch");
  }

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      slot: {
        include: {
          branch: true,
          master: true,
        },
      },
      service: true,
    },
  });

  if (!booking) {
    redirect("/b/select-branch");
  }

  const dateTime = format(booking.slot.startsAt, "d MMMM yyyy, HH:mm", {
    locale: ru,
  });

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
          Запись создана!
        </h1>
        <p className="subtext" style={{ color: "#6b7280" }}>
          Номер брони: {booking.id.slice(0, 8)}
        </p>
      </div>

      <div
        style={{
          padding: "16px",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      >
        <h2 className="label-medium" style={{ marginBottom: "12px" }}>
          Детали записи
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Филиал:{" "}
            </span>
            <span className="label">{booking.slot.branch.name}</span>
          </div>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Услуга:{" "}
            </span>
            <span className="label">{booking.service.name}</span>
          </div>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Мастер:{" "}
            </span>
            <span className="label">{booking.slot.master.name}</span>
          </div>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Дата и время:{" "}
            </span>
            <span className="label">{dateTime}</span>
          </div>
          {booking.customerName && (
            <div>
              <span className="subtext" style={{ color: "#6b7280" }}>
                Имя:{" "}
              </span>
              <span className="label">{booking.customerName}</span>
            </div>
          )}
          {booking.customerPhone && (
            <div>
              <span className="subtext" style={{ color: "#6b7280" }}>
                Телефон:{" "}
              </span>
              <span className="label">{booking.customerPhone}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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

        <Link
          href={`/b/cancel?bookingId=${booking.id}`}
          style={{
            display: "block",
            padding: "14px",
            backgroundColor: "transparent",
            color: "#dc2626",
            border: "1px solid #dc2626",
            borderRadius: "8px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Отменить эту запись
        </Link>
      </div>
    </div>
  );
}

