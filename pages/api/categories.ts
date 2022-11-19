import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


const prisma:PrismaClient = new PrismaClient();

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            const categories = await prisma.category.findMany({user_id: req.body.user_id});
            res.status(200).json(categories);
            break;
        case "POST":
            const category = await prisma.category.create({
                data: {
                    name: req.body.name,
                    user_id: req.body.user_id,
                },
            });
            res.status(201).json(category);
    }
}