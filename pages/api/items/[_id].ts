import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { _id } = req.query;
    switch (req.method) {
    case "GET":

            const item = await prisma.item.findUnique({
                where: {
                    id: Number(_id)
                }
            })
            res.status(200).json(item);
            break;

        case "PUT":
            const updatedItem = await prisma.item.update({
                where: {
                    id: Number(_id)
                },
                data: {
                    name: req.body.name,
                    note: req.body.note || null,
                    image: req.body.image || null,
                }
            });
            res.status(200).json(updatedItem);
            break;
    }
}