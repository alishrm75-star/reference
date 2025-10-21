// src/app/b/booking/booking-form.tsx
// Client component для формы бронирования

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  slotId: string;
  serviceId: string;
  branchName: string;
  serviceName: string;
  masterName: string;
  dateTime: string;
}

export function BookingForm({
  slotId,
  serviceId,
  branchName,
  serviceName,
  masterName,
  dateTime,
}: BookingFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slotId,
          serviceId,
          customerName: name || undefined,
          customerPhone: phone || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка при создании брони");
      }

      // Успешно - переходим на страницу успеха
      router.push(`/b/success?bookingId=${data.booking.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Сводка */}
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
            <span className="label">{branchName}</span>
          </div>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Услуга:{" "}
            </span>
            <span className="label">{serviceName}</span>
          </div>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Мастер:{" "}
            </span>
            <span className="label">{masterName}</span>
          </div>
          <div>
            <span className="subtext" style={{ color: "#6b7280" }}>
              Дата и время:{" "}
            </span>
            <span className="label">{dateTime}</span>
          </div>
        </div>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="name" className="label" style={{ display: "block", marginBottom: "8px" }}>
            Ваше имя
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              fontSize: "15px",
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label htmlFor="phone" className="label" style={{ display: "block", marginBottom: "8px" }}>
            Номер телефона
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (___) ___-__-__"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              fontSize: "15px",
            }}
          />
        </div>

        {error && (
          <div
            style={{
              padding: "12px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "6px",
              marginBottom: "16px",
            }}
          >
            <p className="subtext" style={{ color: "#dc2626" }}>
              {error}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: isSubmitting
              ? "#e5e7eb"
              : "var(--widget-ui-kit-color-brand)",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: 600,
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.opacity = "0.9";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {isSubmitting ? "Создание записи..." : "Подтвердить запись"}
        </button>
      </form>
    </div>
  );
}

