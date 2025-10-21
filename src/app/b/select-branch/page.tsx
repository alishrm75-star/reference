// src/app/b/select-branch/page.tsx
// Выбор филиала

import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function SelectBranchPage() {
  // Получаем первый business (в реальном проекте это может быть из параметров)
  const business = await prisma.business.findFirst();
  
  if (!business) {
    return (
      <div className="container">
        <h1 className="window-header">Выбор филиала</h1>
        <p className="subtext">Бизнес не найден</p>
      </div>
    );
  }

  const branches = await prisma.branch.findMany({
    where: { businessId: business.id },
    orderBy: { name: "asc" },
  });

  if (branches.length === 0) {
    return (
      <div className="container">
        <h1 className="window-header">Выбор филиала</h1>
        <p className="subtext">Филиалы не найдены</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="window-header" style={{ marginBottom: "24px" }}>
        Выбор филиала
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {branches.map((branch) => (
          <Link
            key={branch.id}
            href={`/b/select-service?branchId=${branch.id}`}
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
            <h2 className="label" style={{ marginBottom: "4px" }}>
              {branch.name}
            </h2>
            {branch.address && (
              <p className="subtext" style={{ color: "#6b7280" }}>
                {branch.address}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

