import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: { id: string } };

export async function GET(req: Request, { params }: Params) {
  const { id } = params;
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const where: any = { masterId: id };
  if (from) where.startsAt = { gte: new Date(from) };
  if (to)   where.endsAt   = { lte: new Date(to) };

  const [master, slots] = await Promise.all([
    prisma.master.findUnique({ where: { id } }),
    prisma.slot.findMany({
      where,
      orderBy: [{ startsAt: "asc" }],
      take: 500
    })
  ]);

  if (!master) return NextResponse.json({ error: "Master not found" }, { status: 404 });

  return NextResponse.json({ master: { id: master.id, name: master.name }, slots });
}
