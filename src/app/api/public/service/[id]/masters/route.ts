import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: { id: string } };

export async function GET(_req: Request, { params }: Params) {
  const { id } = params;

  const service = await prisma.service.findUnique({
    where: { id },
    include: {
      masters: {
        include: { master: true }
      }
    }
  });

  if (!service) return NextResponse.json({ error: "Service not found" }, { status: 404 });

  const masters = service.masters.map((ms) => ({
    id: ms.master.id,
    name: ms.master.name,
    durationMin: ms.durationMin,
    price: ms.price
  }));

  return NextResponse.json({ service: { id: service.id, name: service.name }, masters });
}
