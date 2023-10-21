import { db } from "@/server/db";
import { randomInt } from "crypto";
import {type NextApiRequest,type NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed, please use GET" });
    }

    for (let i = 0; i < 1; i++) {
        const buildingNumber = randomInt(1, 10);
        const imagePathList = ["EconomicFaculty.png", "HumanitiesFaculty.png", "LiberalArtScienceFaculty.png"]
        const imagePath = "Photo/" + imagePathList[randomInt(0, imagePathList.length)]
        const percent = randomInt(0, 101);
        const zoneNameList = ["A", "B", "C", "D1", "D2", "E", "F", "G", "H", "J", "L", "M", "K1", "K2"]
        const zoneName = zoneNameList[randomInt(0, zoneNameList.length)] ?? ""

        const bin = await db.bin.create({
            data: {
                location: buildingNumber.toString(),
                locationImagePath: imagePath,
                percentageFull: percent,
                zoneName: zoneName,
            },
            include: {
                zone: true
            }
        }, )

        console.log(bin);
    }

    res.status(200).json({ message: "success" });
}
