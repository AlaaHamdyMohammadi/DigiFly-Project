import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { StoreProvider } from "@/store/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiFly-Project",
  description: "DigiFly-Project",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <StoreProvider>
      <html lang={locale}>
        <NextIntlClientProvider messages={messages}>
          <body className={locale === "ar" ? "rtl" : ""}>{children}</body>
        </NextIntlClientProvider>
      </html>
    </StoreProvider>
  );
}
