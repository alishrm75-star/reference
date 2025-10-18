import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: { slotId: string } };

export async function GET(_req: Request, { params }: Params) {
  const { slotId } = params;

  const slot = await prisma.slot.findUnique({
    where: { id: slotId },
    include: {
      branch: { include: { business: true } },
      master: { include: { services: { include: { service: true } } } },
      service: true
    }
  });

  if (!slot) return NextResponse.json({ error: "Slot not found" }, { status: 404 });

  const masterServices = slot.master.services.map((ms) => ({
    serviceId: ms.serviceId,
    name: ms.service.name,
    durationMin: ms.durationMin,
    price: ms.price
  }));

  return NextResponse.json({
    slot: {
      id: slot.id,
      startsAt: slot.startsAt,
      endsAt: slot.endsAt,
      isBooked: slot.isBooked
    },
    branch: {
      id: slot.branch.id,
      name: slot.branch.name,
      slug: slot.branch.slug
    },
    business: {
      id: slot.branch.business.id,
      name: slot.branch.business.name,
      slug: slot.branch.business.slug
    },
    master: {
      id: slot.master.id,
      name: slot.master.name,
      rating: slot.master.rating ?? null,
      services: masterServices
    },
    service: slot.service ? { id: slot.service.id, name: slot.service.name } : null
  });
}
