import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

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
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
