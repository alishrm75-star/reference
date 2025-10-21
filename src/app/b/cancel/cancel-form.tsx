// src/app/b/cancel/cancel-form.tsx
// Client component для отмены брони

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CancelFormProps {
  initialBookingId?: string;
}

export function CancelForm({ initialBookingId }: CancelFormProps) {
  const router = useRouter();
  const [bookingId, setBookingId] = useState(initialBookingId || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!bookingId.trim()) {
      setError("Введите номер брони");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/booking/${bookingId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Ошибка при отмене брони");
      }

      // Успешно - переходим на страницу успеха
      router.push("/b/cancel/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "24px" }}>
        <label
          htmlFor="bookingId"
          className="label"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Номер брони
        </label>
        <input
          id="bookingId"
          type="text"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          placeholder="Введите номер брони"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            fontSize: "15px",
          }}
        />
        <p className="subtext" style={{ marginTop: "8px", color: "#6b7280" }}>
          Вы можете найти номер брони в подтверждении записи
        </p>
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
          backgroundColor: isSubmitting ? "#e5e7eb" : "#dc2626",
          color: "#fff",
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
        {isSubmitting ? "Отмена..." : "Отменить запись"}
      </button>
    </form>
  );
}

