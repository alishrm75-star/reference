// src/app/b/booking/page.tsx
// Подтверждение брони

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { BookingForm } from "./booking-form";

interface PageProps {
  searchParams: Promise<{
    branchId?: string;
    serviceId?: string;
    masterId?: string;
    slotId?: string;
  }>;
}

export default async function BookingPage({ searchParams }: PageProps) {
  const { branchId, serviceId, masterId, slotId } = await searchParams;

  if (!branchId || !serviceId || !masterId || !slotId) {
    redirect("/b/select-branch");
  }

  const [branch, service, master, slot] = await Promise.all([
    prisma.branch.findUnique({ where: { id: branchId } }),
    prisma.service.findUnique({ where: { id: serviceId } }),
    prisma.master.findUnique({ where: { id: masterId } }),
    prisma.slot.findUnique({ where: { id: slotId } }),
  ]);

  if (!branch || !service || !master || !slot) {
    redirect("/b/select-branch");
  }

  if (slot.isBooked) {
    return (
      <div className="container">
        <h1 className="window-header" style={{ marginBottom: "16px" }}>
          Слот занят
        </h1>
        <p className="label" style={{ marginBottom: "24px" }}>
          К сожалению, этот слот уже забронирован другим клиентом.
        </p>
        <Link
          href={`/b/select-time?branchId=${branchId}&serviceId=${serviceId}&masterId=${masterId}`}
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "var(--widget-ui-kit-color-brand)",
            color: "#000",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Выбрать другое время
        </Link>
      </div>
    );
  }

  const dateTime = format(slot.startsAt, "d MMMM yyyy, HH:mm", { locale: ru });

  return (
    <div className="container">
      <Link
        href={`/b/select-time?branchId=${branchId}&serviceId=${serviceId}&masterId=${masterId}`}
        className="label"
        style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
      >
        ← Назад к выбору времени
      </Link>

      <h1 className="window-header" style={{ marginBottom: "24px" }}>
        Подтверждение записи
      </h1>

      <BookingForm
        slotId={slotId}
        serviceId={serviceId}
        branchName={branch.name}
        serviceName={service.name}
        masterName={master.name}
        dateTime={dateTime}
      />
    </div>
  );
}

