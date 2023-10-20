import Map from "@/components/Map";
import ZoneButton from "@/components/ZoneButton";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [zone, setZone] = useState("");

  return (
    <>
      <Head>
        <title>KUSMT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
    </>
  );
}
