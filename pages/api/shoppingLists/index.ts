import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            const shoppinglists = await prisma.shoppinglist.findMany({ user_id: req.body.user_id });
            res.status(200).json(shoppinglists);
            break;

        case "POST":
            const shoppinglist = await prisma.shoppinglist.create({
                data: {
                    name: req.body.name,
                    user_id: req.body.user_id,
                    items: req.body.items || [],
                },
            });
            res.status(201).json(shoppinglist);
    }
}