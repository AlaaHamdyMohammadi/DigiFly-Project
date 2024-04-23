import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiFly-Project",
  description: "DigiFly-Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
