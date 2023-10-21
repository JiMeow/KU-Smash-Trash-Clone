import { db } from "@/server/db";
import { type Bin } from "@prisma/client";
import {type NextApiRequest,type NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed, please use GET" });
    }
    
    const allBin = await db.bin.findMany({
        include: {
            zone: true
        }
    });

    const zoneBinMap = new Map<string, Bin[]>();
    allBin.forEach(bin => {
        if (zoneBinMap.has(bin.zone.name)) {
            zoneBinMap.get(bin.zone.name)?.push(bin);
        } else {
            zoneBinMap.set(bin.zone.name, [bin]);
        }
    })

    return res.status(200).json(Object.fromEntries(zoneBinMap));
}