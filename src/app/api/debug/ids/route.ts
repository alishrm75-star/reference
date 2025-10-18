import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [business] = await prisma.business.findMany({ take: 1 });
  const [branch]   = await prisma.branch.findMany({ take: 1 });
  const [master]   = await prisma.master.findMany({ take: 1 });
  const [service]  = await prisma.service.findMany({ take: 1 });
  const [slot]     = await prisma.slot.findMany({ where: { isBooked: false }, take: 1 });

  return NextResponse.json({
    businessId: business?.id ?? null,
    branchId: branch?.id ?? null,
    masterId: master?.id ?? null,
    serviceId: service?.id ?? null,
    slotId: slot?.id ?? null
  });
}
