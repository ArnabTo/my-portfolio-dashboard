import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight:['100', '200', '300', '400', '500', '600','700', '800',], subsets: ['latin'] })

export const metadata = {
  title: "Dashboard",
  description: "ARSDEV Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}  <Toaster /></body>
    </html>
  );
}
