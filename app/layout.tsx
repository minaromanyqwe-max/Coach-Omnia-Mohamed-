import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./compount/Navbar";
import Footer from "./compount/footer/page";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Coach Omnia Mohamed | المدربة الشخصية",
  description: "احصلي على أفضل نظام تدريب وغذاء مع أمنية محمد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white selection:bg-indigo-500/30 bg-[#3C4544]">
        <NavbarDemo/>
        <main className="flex-grow flex flex-col w-full relative z-0 pb-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
