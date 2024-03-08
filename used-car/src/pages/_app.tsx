import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "~/styles/globals.css";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <main className={`font-sans ${inter.variable} scroll-smooth`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
};

export default MyApp;
