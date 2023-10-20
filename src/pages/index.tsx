import Card from "@/components/Card";
import Map from "@/components/Map";
import Nav from "@/components/Nav";
import ZoneNav from "@/components/ZoneNav";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [zone, setZone] = useState("");

  useEffect(() => {
    console.log(zone);
  }, [zone]);

  return (
    <>
      <Head>
        <title>KUSMT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Map setZone={setZone} />
      {zone && <ZoneNav zone={zone} />}
      <div className="grid grid-cols-3 place-items-center gap-10 px-[10vw] md:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
