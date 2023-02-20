import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            res.status(405).send("GET method is not allowed");
            break;
        case "POST":
            const prisma = new PrismaClient();
            const { name, email, message } = req.body;
            prisma.message.create({
                data: {
                    name,
                    email,
                    message
                }
            }).then(() => {
                res.status(200).send("Message sent successfully");
            }).catch((err: Error) => {
                res.status(500).json({
                    message: "Internal server error",
                    error: err.message
                });
            }).finally(() => {
                prisma.$disconnect();
            });
            break;

        default: res.status(405).send("Method not allowed");
    }
};