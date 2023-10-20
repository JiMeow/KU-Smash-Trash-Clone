import Map from "@/components/Map";
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
      <Map setZone={setZone} />
    </>
  );
}
