import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: {
      slot: true,
      service: true,
      master: true,
      branch: true
    }
  });

  return NextResponse.json({
    bookings: bookings.map(b => ({
      id: b.id,
      status: b.status,
      createdAt: b.createdAt,
      customerName: b.customerName,
      customerPhone: b.customerPhone,
      service: b.service ? { id: b.service.id, name: b.service.name } : null,
      master: { id: b.master.id, name: b.master.name },
      branch: { id: b.branch.id, name: b.branch.name, slug: b.branch.slug },
      slot: { id: b.slot.id, startsAt: b.slot.startsAt, endsAt: b.slot.endsAt }
    }))
  });
}

export async function POST(req: Request) {
  const idem = req.headers.get("Idempotency-Key") || undefined;
  const { slotId, serviceId, customerName, customerPhone } = await req.json().catch(() => ({}));

  if (!slotId || !serviceId) {
    return NextResponse.json({ error: "slotId and serviceId are required" }, { status: 400 });
  }

  const slot = await prisma.slot.findUnique({ where: { id: slotId } });
  if (!slot || slot.isBooked) {
    return NextResponse.json({ error: "Slot invalid or already booked" }, { status: 409 });
  }

  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service) {
    return NextResponse.json({ error: "Service not found" }, { status: 400 });
  }

  const booking = await prisma.$transaction(async (tx) => {
    const created = await tx.booking.create({
      data: {
        slotId: slot.id,
        branchId: slot.branchId,
        masterId: slot.masterId,
        serviceId: service.id,
        customerName: customerName ?? null,
        customerPhone: customerPhone ?? null,
        status: "CONFIRMED"
      }
    });
    await tx.slot.update({ where: { id: slot.id }, data: { isBooked: true } });
    return created;
  });

  return NextResponse.json(
    { booking },
    { status: 201, headers: idem ? { "Idempotency-Key": idem } : {} }
  );
}
