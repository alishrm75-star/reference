// src/app/b/select-time/page.tsx
// Выбор времени и даты

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { format, addDays, startOfDay, isWeekend } from "date-fns";
import { ru } from "date-fns/locale";

interface PageProps {
  searchParams: Promise<{
    branchId?: string;
    serviceId?: string;
    masterId?: string;
  }>;
}

function getNext28Weekdays(): Date[] {
  const days: Date[] = [];
  let current = startOfDay(new Date());
  
  while (days.length < 28) {
    if (!isWeekend(current)) {
      days.push(new Date(current));
    }
    current = addDays(current, 1);
  }
  
  return days;
}

export default async function SelectTimePage({ searchParams }: PageProps) {
  const { branchId, serviceId, masterId } = await searchParams;

  if (!branchId || !serviceId || !masterId) {
    redirect("/b/select-branch");
  }

  const [branch, service, master] = await Promise.all([
    prisma.branch.findUnique({ where: { id: branchId } }),
    prisma.service.findUnique({ where: { id: serviceId } }),
    prisma.master.findUnique({ where: { id: masterId } }),
  ]);

  if (!branch || !service || !master) {
    redirect("/b/select-branch");
  }

  // Получаем следующие 28 будних дней
  const weekdays = getNext28Weekdays();
  const startDate = weekdays[0];
  const endDate = addDays(weekdays[weekdays.length - 1], 1);

  // Получаем все свободные слоты для этого мастера в диапазоне дат
  const slots = await prisma.slot.findMany({
    where: {
      branchId,
      masterId,
      isBooked: false,
      startsAt: {
        gte: startDate,
        lt: endDate,
      },
    },
    orderBy: { startsAt: "asc" },
  });

  // Группируем слоты по датам
  const slotsByDate = new Map<string, typeof slots>();
  
  for (const slot of slots) {
    const dateKey = format(slot.startsAt, "yyyy-MM-dd");
    if (!slotsByDate.has(dateKey)) {
      slotsByDate.set(dateKey, []);
    }
    slotsByDate.get(dateKey)!.push(slot);
  }

  return (
    <div className="container">
      <Link
        href={`/b/select-master?branchId=${branchId}&serviceId=${serviceId}`}
        className="label"
        style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
      >
        ← Назад к мастерам
      </Link>

      <h1 className="window-header" style={{ marginBottom: "8px" }}>
        Выбор времени
      </h1>
      <div style={{ marginBottom: "24px" }}>
        <p className="subtext" style={{ color: "#6b7280" }}>
          {service.name} • {master.name}
        </p>
      </div>

      {slots.length === 0 ? (
        <div style={{ 
          padding: "32px", 
          textAlign: "center",
          backgroundColor: "#f9fafb",
          borderRadius: "8px"
        }}>
          <p className="label" style={{ marginBottom: "8px" }}>
            Нет доступных слотов
          </p>
          <p className="subtext" style={{ color: "#6b7280" }}>
            Попробуйте выбрать другого мастера
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {weekdays.map((date) => {
            const dateKey = format(date, "yyyy-MM-dd");
            const daySlots = slotsByDate.get(dateKey) || [];
            
            if (daySlots.length === 0) return null;

            return (
              <div key={dateKey}>
                <h2 
                  className="label-medium" 
                  style={{ 
                    marginBottom: "12px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid #e5e7eb"
                  }}
                >
                  {format(date, "d MMMM, EEEE", { locale: ru })}
                </h2>
                
                <div 
                  style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                    gap: "8px"
                  }}
                >
                  {daySlots.map((slot) => (
                    <Link
                      key={slot.id}
                      href={`/b/booking?branchId=${branchId}&serviceId=${serviceId}&masterId=${masterId}&slotId=${slot.id}`}
                      style={{
                        display: "block",
                        padding: "12px 8px",
                        backgroundColor: "var(--widget-ui-kit-color-white)",
                        border: "1px solid #e5e7eb",
                        borderRadius: "6px",
                        textAlign: "center",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--widget-ui-kit-color-brand)";
                        e.currentTarget.style.backgroundColor = "#fffbeb";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e5e7eb";
                        e.currentTarget.style.backgroundColor = "var(--widget-ui-kit-color-white)";
                      }}
                    >
                      <span className="label">
                        {format(slot.startsAt, "HH:mm")}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

