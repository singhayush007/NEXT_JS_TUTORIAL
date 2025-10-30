import type { ReactNode } from "react";
import "./globals.css";
export default function RootLayout({ children, ParallelRoute }: { children: ReactNode; ParallelRoute?: ReactNode }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex">
        <div className="w-[50%] bg-blue-700">{children}</div>
        <div className="w-[50%] bg-red-700">{ParallelRoute}</div>
      </body>
    </html>
  );
}
