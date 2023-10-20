import { type AppType } from "next/dist/shared/lib/utils";
import { Jua } from "next/font/google";
import "@/styles/globals.css";
import DevViewport from "@/components/DivViewPort";

const font = Jua({ weight: "400", subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "development" && <DevViewport />}
    </main>
  );
};

export default MyApp;
