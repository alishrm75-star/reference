// src/app/b/select-master/page.tsx
// Выбор мастера

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ branchId?: string; serviceId?: string }>;
}

export default async function SelectMasterPage({ searchParams }: PageProps) {
  const { branchId, serviceId } = await searchParams;

  if (!branchId || !serviceId) {
    redirect("/b/select-branch");
  }

  const [branch, service] = await Promise.all([
    prisma.branch.findUnique({
      where: { id: branchId },
    }),
    prisma.service.findUnique({
      where: { id: serviceId },
    }),
  ]);

  if (!branch || !service) {
    redirect("/b/select-branch");
  }

  // Получаем мастеров, которые предоставляют эту услугу
  const masterServices = await prisma.masterService.findMany({
    where: { serviceId },
    include: {
      master: true,
    },
  });

  const masters = masterServices.map((ms) => ({
    ...ms.master,
    price: ms.price,
    durationMinutes: ms.durationMinutes,
  }));

  if (masters.length === 0) {
    return (
      <div className="container">
        <Link
          href={`/b/select-service?branchId=${branchId}`}
          className="label"
          style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
        >
          ← Назад
        </Link>
        <h1 className="window-header">Выбор мастера</h1>
        <p className="subtext">Нет доступных мастеров для этой услуги</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link
        href={`/b/select-service?branchId=${branchId}`}
        className="label"
        style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
      >
        ← Назад к услугам
      </Link>

      <h1 className="window-header" style={{ marginBottom: "8px" }}>
        Выбор мастера
      </h1>
      <p className="subtext" style={{ marginBottom: "24px", color: "#6b7280" }}>
        {service.name}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {masters.map((master) => (
          <Link
            key={master.id}
            href={`/b/select-time?branchId=${branchId}&serviceId=${serviceId}&masterId=${master.id}`}
            style={{
              display: "block",
              padding: "16px",
              backgroundColor: "var(--widget-ui-kit-color-white)",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--widget-ui-kit-color-brand)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2 className="label" style={{ marginBottom: "4px" }}>
                  {master.name}
                </h2>
                {master.specialization && (
                  <p className="subtext" style={{ color: "#6b7280" }}>
                    {master.specialization}
                  </p>
                )}
              </div>
              <div style={{ textAlign: "right" }}>
                {master.price && (
                  <p className="price" style={{ marginBottom: "4px" }}>
                    {master.price} ₽
                  </p>
                )}
                {master.durationMinutes && (
                  <p className="subtext" style={{ color: "#6b7280" }}>
                    {master.durationMinutes} мин
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

