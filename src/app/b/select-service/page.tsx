// src/app/b/select-service/page.tsx
// Выбор услуги

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ branchId?: string }>;
}

export default async function SelectServicePage({ searchParams }: PageProps) {
  const { branchId } = await searchParams;

  if (!branchId) {
    redirect("/b/select-branch");
  }

  const branch = await prisma.branch.findUnique({
    where: { id: branchId },
    include: { business: true },
  });

  if (!branch) {
    redirect("/b/select-branch");
  }

  const services = await prisma.service.findMany({
    where: { businessId: branch.businessId },
    orderBy: { name: "asc" },
  });

  if (services.length === 0) {
    return (
      <div className="container">
        <Link
          href="/b/select-branch"
          className="label"
          style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
        >
          ← Назад
        </Link>
        <h1 className="window-header">Выбор услуги</h1>
        <p className="subtext">Услуги не найдены</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link
        href="/b/select-branch"
        className="label"
        style={{ display: "inline-block", marginBottom: "16px", color: "#6b7280" }}
      >
        ← Назад к филиалам
      </Link>

      <h1 className="window-header" style={{ marginBottom: "8px" }}>
        Выбор услуги
      </h1>
      <p className="subtext" style={{ marginBottom: "24px", color: "#6b7280" }}>
        {branch.name}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/b/select-master?branchId=${branchId}&serviceId=${service.id}`}
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
                  {service.name}
                </h2>
                {service.description && (
                  <p className="subtext" style={{ color: "#6b7280" }}>
                    {service.description}
                  </p>
                )}
              </div>
              <div style={{ textAlign: "right" }}>
                {service.durationMinutes && (
                  <p className="subtext" style={{ color: "#6b7280" }}>
                    {service.durationMinutes} мин
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

