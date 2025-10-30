import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WanderWise – Your Ultimate Travel Guide",
  description:
    "Discover breathtaking destinations, hidden gems, and expert travel tips with WanderWise. Plan your perfect journey with curated guides, photos, and experiences from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen h-screen bg-black`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
