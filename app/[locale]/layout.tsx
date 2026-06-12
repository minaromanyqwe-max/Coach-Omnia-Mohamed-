import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "../globals.css";
import { NavbarDemo } from "../compount/Navbar";
import Footer from "../compount/footer/page";
import { cn } from "@/lib/utils";
import StyledComponentsRegistry from "@/lib/registry";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { ThemeProvider } from "../../components/theme-provider";
import ClientEffects from "./sections/ClientEffects";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Coach Omnia Mohamed | المدربة الشخصية",
  description: "احصلي على أفضل نظام تدريب وغذاء مع أمنية محمد.",
};

// 1. عوّد نفسك تفصل الـ Interface برة عشان الكود يكون أنضف وأسهل في القراءة
interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // التعديل الجوهري هنا: تحويلها لـ Promise
}

export default async function RootLayout({ children, params }: LayoutProps) {
  // 2. عمل الـ await اللي إنت عملته بشكل سليم تماماً
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={cn("h-full", "antialiased", cairo.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col text-foreground selection:bg-indigo-500/30 bg-background relative overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ClientEffects />
            
            <StyledComponentsRegistry>
              <div className="relative z-10 flex flex-col min-h-screen w-full">
                <NavbarDemo />
                <main className="flex-grow flex flex-col w-full pb-20">
                  {children}
                </main>
                <Footer />
              </div>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}