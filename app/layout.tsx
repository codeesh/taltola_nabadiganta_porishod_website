import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taltola Nabadiganta Porishod",
  description: "এক বছর পথচলা, সেবায় অবিচল — Taltola Nabadiganta Porishod",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
