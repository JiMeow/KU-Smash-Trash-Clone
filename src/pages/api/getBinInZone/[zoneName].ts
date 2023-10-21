import { db } from "@/server/db";
import {type NextApiRequest,type NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed, please use GET" });
    }
    
    const zoneName = req.query.zoneName as string
    const zone = await db.zone.findUnique({
        where: {
            name: zoneName
        },
        include: {
            bins: true
        }
    });

    return res.status(200).json(zone?.bins ?? []);
}