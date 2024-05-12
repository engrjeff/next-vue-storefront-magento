import { Jost } from "next/font/google";
import localFont from "next/font/local";

const sans = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const heading = localFont({
  src: [
    {
      path: "./GTAmerica_ExtendedRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./GTAmerica_ExtendedBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-gtamerica-eb",
});

export const font = {
  sans,
  heading,
};
