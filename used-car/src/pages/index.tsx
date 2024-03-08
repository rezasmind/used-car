import Head from "next/head";
import Navbarr from "./components/Navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import car from "public/car.png";
import localFont from "next/font/local";
import { Select, SelectItem } from "@nextui-org/react";
import { FaCarSide } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import left from "public/left.svg";
import right from "public/right.svg";
import { Card, CardFooter } from "@nextui-org/react";
import car1 from "public/car1.jpg";

const stretch = localFont({ src: "../../public/fonts/font.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Used Car Renting</title>
        <meta name="description" content="Used Car Selling Renting" />
      </Head>
      <main className="flex min-h-screen w-full  flex-col items-center  ">
        <div className="hero flex h-[88vh] w-full flex-col items-center text-white">
          <nav className="w-full ">
            <Navbarr />{" "}
          </nav>

          <div className="hero1 flex flex-col items-center justify-center gap-2">
            <div className=" mb-4 mt-32 flex flex-col items-center justify-center gap-2">
              <h1 className="text-2xl">Today&rsquo;s Offer</h1>
              <h2 className="text-4xl text-[#FFC700]">
                <span className={stretch.className}>TOYOTA COROLLA 2021</span>
              </h2>
              <span className="text-sm">399$ per month</span>
            </div>

            <div className="buttons flex flex-row gap-4">
              <Button className="rounded-lg bg-[#FFC700] px-4 py-2">
                {" "}
                Buy Now
              </Button>
              <Button
                className="border-1 border-white bg-none px-4 py-2 text-white"
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

        <div className="search my-24 rounded-2xl bg-white  text-[#1d1d1d]">
          <div className="flex w-[70vw] flex-col items-center justify-center rounded-2xl p-12  shadow-lg shadow-gray-400">
            <div className="texts flex flex-row items-center justify-center">
              <h1 className="text-2xl font-bold">Book a car</h1>
            </div>

            <div className="search-items mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-8">
              <Select
                label="Select car brand"
                placeholder="Select car brand"
                labelPlacement="outside"
                className="w-1/4 basis-1/4 "
                variant="bordered"
                selectorIcon={<FaCarSide />}
              >
                <SelectItem key={1}>BMW</SelectItem>
                <SelectItem key={2}>Benz</SelectItem>
                <SelectItem key={3}>Ferrari</SelectItem>
              </Select>

              <Select
                label="Pickup"
                variant="bordered"
                placeholder="Pickup"
                labelPlacement="outside"
                className="w-1/4 basis-1/4"
                selectorIcon={<FaLocationArrow />}
              >
                <SelectItem key={1}>BMW</SelectItem>
                <SelectItem key={2}>Benz</SelectItem>
                <SelectItem key={3}>Ferrari</SelectItem>
              </Select>

              <Select
                label="Drop-of"
                variant="bordered"
                placeholder="Drop-of"
                labelPlacement="outside"
                className="w-1/4 basis-1/4 border-[#1d1d1d]"
                selectorIcon={<FaLocationArrow />}
              >
                <SelectItem key={1}>BMW</SelectItem>
                <SelectItem key={2}>Benz</SelectItem>
                <SelectItem key={3}>Ferrari</SelectItem>
              </Select>

              <div className="datepicker w-1/3 basis-1/4">
                <p className=" mb-1 text-sm">Pick-up date</p>
                <input
                  aria-label="Date"
                  type="date"
                  className=" w-full rounded-xl border-2 border-[#eee] px-3 py-1 text-gray-500"
                />
              </div>

              <div className="datepicker w-1/3 basis-1/4">
                <p className=" mb-1 text-sm">Drop-of date</p>
                <input
                  aria-label="Date"
                  type="date"
                  className=" w-full rounded-xl border-2 border-[#eee] px-3 py-1 text-gray-500"
                />
              </div>

              <div className="flex w-1/4 basis-1/4 items-center justify-center ">
                <Button className="mt-5 w-full bg-[#FFC700] shadow-lg shadow-[#ffc700]">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="banners mb-12 flex w-full flex-col items-center justify-center">
          <div className="banner-sec flex w-[70vw] flex-row items-center justify-center gap-4">
            <div className="left flex h-64 w-1/2 flex-row items-center justify-center rounded-xl bg-[#ffc700] p-12 shadow-lg shadow-[#ffc700] transition-all duration-500 hover:shadow-md">
              <div className="left-left w-1/2 text-white">
                <h3 className="mb-4 text-3xl font-bold text-white">
                  Do you want to rent a car?
                </h3>
                <Button variant="bordered" className="border-white text-white">
                  Book a car
                </Button>
              </div>
              <div className="left-right flex w-1/2 flex-row justify-end">
                <Image src={left} alt={""} />
              </div>
            </div>

            <div className="right flex h-64 w-1/2 flex-row items-center justify-center rounded-xl bg-[#1d1d1d] p-12 shadow-lg shadow-[#1d1d1d] transition-all duration-500 hover:shadow-md">
              <div className="right-left w-1/2">
                <h3 className="mb-4 text-3xl font-bold text-white">
                  Looking for classic cars to rent
                </h3>
                <Button variant="bordered" className="text-white">
                  Rent Classic!
                </Button>
              </div>
              <div className="right-right flex w-1/2 flex-row justify-end">
                <Image src={right} alt={""} />
              </div>
            </div>
          </div>
        </div>

        <div className="listings mt-12 flex w-full flex-col items-center">
          <h1 className="mb-8 text-4xl font-bold text-[#1d1d1d]">
            Features Listings
          </h1>
          <div className="types mb-8 flex flex-row gap-8 ">
            <Button className="bg-[#ffc700] px-8 py-2 text-[#1d1d1d]">
              Sport
            </Button>

            <Button
              variant="bordered"
              className="border-[#1d1d1d] px-8 py-2 text-[#1d1d1d]"
            >
              SUV
            </Button>

            <Button
              variant="bordered"
              className="border-[#1d1d1d] px-8 py-2 text-[#1d1d1d]"
            >
              Classic
            </Button>
          </div>

          <div className="items flex w-full flex-row items-center justify-center gap-8 mb-12">
            <div className="left w-1/3 flex flex-col justify-end items-end h-96">
              <Card
                isFooterBlurred
                radius="lg"
                className=" w-2/3 border-none h-full flex flex-col justify-center items-center"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover h-96 w-full "
                  src={car1}
                  
                />
                <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Available soon.</p>
                  <Button
                    className="text-tiny bg-black/20 text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Notify me
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="right w-1/3 flex-row flex flex-wrap gap-4 h-96">
              <Card
                isFooterBlurred
                radius="lg"
                className="w-2/3 border-none basis-1/3"
              >
                <Image
                  alt="Woman listing to music"
                  className=" object-cover h-full w-full"
                  src={car1}
                />
                <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Available soon.</p>
                  <Button
                    className="text-tiny bg-black/20 text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Notify me
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className=" w-1/2 border-none basis-1/3"
              >
                <Image
                  alt="Woman listing to music"
                  className=" object-cover h-full w-full"
                  src={car1}
                />
                <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Available soon.</p>
                  <Button
                    className="text-tiny bg-black/20 text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Notify me
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className=" w-1/2 border-none basis-1/3"
              >
                <Image
                  alt="Woman listing to music"
                  className=" object-cover h-full w-full"
                  src={car1}
                />
                <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Available soon.</p>
                  <Button
                    className="text-tiny bg-black/20 text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Notify me
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className=" border-none basis-1/3"
              >
                <Image
                  alt="Woman listing to music"
                  className=" object-cover h-full w-full"
                  src={car1}
                />
                <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Available soon.</p>
                  <Button
                    className="text-tiny bg-black/20 text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Notify me
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
