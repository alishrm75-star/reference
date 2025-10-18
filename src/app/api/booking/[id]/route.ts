import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: { id: string } };

// DELETE /api/booking/:id — отмена брони + освобождение слота
export async function DELETE(_req: Request, { params }: Params) {
  const { id } = params;

  const booking = await prisma.booking.findUnique({ where: { id } });
  if (!booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  await prisma.$transaction(async (tx) => {
    await tx.booking.delete({ where: { id } });
    await tx.slot.update({ where: { id: booking.slotId }, data: { isBooked: false } });
  });

  return NextResponse.json({ ok: true });
}
