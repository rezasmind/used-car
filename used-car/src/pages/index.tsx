import Head from "next/head";
import Link from "next/link";
import Navbarr from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Used Car Renting</title>
        <meta name="description" content="Used Car Selling Renting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full  flex-col  ">
        <div className="hero h-[88vh] w-full flex flex-col text-white items-center">
          <nav className="w-full ">
            {" "}
            <Navbarr />{" "}
          </nav>
        </div>
      </main>
    </>
  );
}
