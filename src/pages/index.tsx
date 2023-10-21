import CardList from "@/components/CardList";
import Map from "@/components/Map";
import Nav from "@/components/Nav";
import ZoneNav from "@/components/ZoneNav";
import useBinInAllZone from "@/hook/useBinInAllZone";
import Head from "next/head";
import { useRef, useState } from "react";

export default function Home() {
  const [zone, setZone] = useState("");
  const { data, isError } = useBinInAllZone();
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>KUSMT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Map setZone={setZone} scrollTo={ref} />
      <div ref={ref}></div>
      {zone && <ZoneNav zone={zone} />}
      <CardList
        zone={zone}
        dataInit={!isError && data ? data[zone] : undefined}
      />
    </>
  );
}
