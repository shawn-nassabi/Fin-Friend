import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "../fonts/oregon.ttf",
});

export const metadata = {
  title: "Fin Friend",
  description: "Your super simple budgeting app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-[#FDFCF5]`}>{children}</body>
    </html>
  );
}
