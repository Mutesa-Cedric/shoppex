// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

type Data = {
  items?: any;
  item?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      console.log(req.body);
      const item = await prisma.item.create({
        data: {
          name: req.body.name,
          note: req.body.note || null,
          image: req.body.image || null,
          category_id: req.body.category_id,
        },
      });
      res.status(200).json({ item });
      break;
    case "GET":
      const items = await prisma.item.findMany({ where: { } });
      res.status(200).json({ items });
      break;
  }
}
