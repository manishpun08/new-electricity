import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans } from "next/font/google";
import Providers from "./provider";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import BotPopup from "@/features/chatbot/BotPopup";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Electricity Commission",
  description: "Nepal Electricity Authority",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${notoSans.variable} antialiased font-noto-sans bg-background-400`}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <BotPopup />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
