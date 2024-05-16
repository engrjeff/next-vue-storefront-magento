import Categories from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import HeaderWrapper from "@/components/HeaderWrapper";
import { Providers } from "@/sdk/provider";
import NextTopLoader from "nextjs-toploader";

import type { Metadata } from "next";
import { font } from "./fonts/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Showpo UK",
  description: "Showpo UK store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body
        className={`${font.sans.variable} ${font.heading.variable} scroll-smooth antialiased font-sans min-h-screen flex flex-col w-full`}
      >
        <NextTopLoader color='#000' showSpinner={false} shadow={false} />
        <Providers>
          <HeaderWrapper>
            <Header />
            <Categories />
          </HeaderWrapper>
          <main className='flex-1'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
