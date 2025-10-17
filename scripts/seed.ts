import { addMinutes, isBefore, set } from "date-fns";
import { prisma } from "../src/lib/prisma";

async function main() {
  const biz = await prisma.business.upsert({
    where: { slug: "homi-demo" },
    update: {},
    create: { slug: "homi-demo", name: "Homi Demo" }
  });

  const branch = await prisma.branch.upsert({
    where: { businessId_slug: { businessId: biz.id, slug: "central" } },
    update: {},
    create: { businessId: biz.id, name: "Центральный", slug: "central", address: "Main st. 1" }
  });

  const [m1, m2] = await Promise.all([
    prisma.master.create({ data: { businessId: biz.id, name: "Анна", rating: 4.9 } }),
    prisma.master.create({ data: { businessId: biz.id, name: "Ильяс", rating: 4.7 } })
  ]);

  const [sCut, sMani] = await Promise.all([
    prisma.service.create({ data: { businessId: biz.id, name: "Стрижка", baseDurationMin: 45, basePrice: 8000 } }),
    prisma.service.create({ data: { businessId: biz.id, name: "Маникюр", baseDurationMin: 60, basePrice: 12000 } })
  ]);

  await prisma.masterService.createMany({
    data: [
      { masterId: m1.id, serviceId: sCut.id,  durationMin: 45, price: 9000 },
      { masterId: m1.id, serviceId: sMani.id, durationMin: 60, price: 12000 },
      { masterId: m2.id, serviceId: sCut.id,  durationMin: 30, price: 7000 }
    ],
    skipDuplicates: true
  });

  const today = new Date();
  const horizonDays = 28;
  const stepMin = 30;
  let created = 0;

  for (let d = 0; d < horizonDays; d++) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + d);
    const day = date.getDay(); // 0..6
    if (day === 0 || day === 6) continue; // только будни

    for (const master of [m1, m2]) {
      const startDay = set(date, { hours: 10, minutes: 0, seconds: 0, milliseconds: 0 });
      const endDay   = set(date, { hours: 18, minutes: 0, seconds: 0, milliseconds: 0 });
      let cursor = startDay;

      while (isBefore(cursor, endDay)) {
        const next = addMinutes(cursor, stepMin);
        await prisma.slot.create({
          data: {
            branchId: branch.id,
            masterId: master.id,
            serviceId: null,
            startsAt: cursor,
            endsAt: next
          }
        });
        created++;
        cursor = next;
      }
    }
  }

  console.log(`Seed done: created ${created} slots`);
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
