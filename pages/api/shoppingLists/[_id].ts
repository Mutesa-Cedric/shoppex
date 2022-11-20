import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req:NextApiRequest, res:NextApiResponse
){
    const { _id } = req.query;
    switch (req.method) {
        case "GET":
            const shoppinglist = await prisma.shopping_list.findUnique({
                where: {
                    id: Number(_id)
                }
            })
            res.status(200).json(shoppinglist);
            break;
        case "PUT":
            const updatedShoppinglist = await prisma.shopping_list.update({
                where: {
                    id: Number(_id)
                },
                data: {
                    name: req.body.name,
                    items: req.body.items || [],
                }
            });
            res.status(204).json(updatedShoppinglist);
            break;
    }
}