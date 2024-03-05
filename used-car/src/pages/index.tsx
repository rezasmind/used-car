import Head from "next/head";
import Link from "next/link";
import Navbarr from "./components/Navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import car from "public/car.png";
import localFont from "next/font/local";
const stretch = localFont({ src: "../../public/fonts/font.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Used Car Renting</title>
        <meta name="description" content="Used Car Selling Renting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full  flex-col  ">
        <div className="hero flex h-[88vh] w-full flex-col items-center text-white">
          <nav className="w-full ">
            {" "}
            <Navbarr />{" "}
          </nav>

          <div className="hero1 flex flex-col items-center justify-center gap-2">
            <div className=" mt-32 mb-4 flex flex-col items-center justify-center gap-2">
              <h1 className="text-2xl">Today's Offer</h1>
              <h2 className="text-[#FFC700] text-4xl" ><p className={stretch.className}>TOYOTA COROLLA 2021</p></h2>
              <span className="text-sm">399$ per month</span>
            </div>

            <div className="buttons flex flex-row gap-4">
              <Button className=" rounded-lg bg-[#FFC700] px-4 py-2">
                {" "}
                Buy Now
              </Button>
              <Button
                className="border-1 border border-white bg-none px-4 py-2 text-white"
                variant="bordered"
              >
                {" "}
                Learn More{" "}
              </Button>
            </div>
            <Image
              src={car}
              alt={""}
              quality={100}
              width={1100}
              className=" translate-y-1"
            />
          </div>
        </div>
      </main>
    </>
  );
}
