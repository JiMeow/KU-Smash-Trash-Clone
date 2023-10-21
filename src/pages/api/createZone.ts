import { db } from "@/server/db";
import {type NextApiRequest,type NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {    
    const allZones = ["A", "B", "C", "D1", "D2", "E", "F", "G", "H", "I", "L", "M", "K1", "K2"].map(async (zoneName) => {
        await db.zone.create({
            data: {
                name: zoneName,
            }
        }, )
    })

    const data = await Promise.allSettled(allZones)

    res.status(200).json(data);

}