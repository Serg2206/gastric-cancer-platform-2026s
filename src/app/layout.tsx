import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSVPROFF | Аденокарцинома Желудка — Молекулярная Эра Хирургии",
  description:
    "Интерактивный курс по аденокарциноме желудка: молекулярная онкология, периоперационные алгоритмы, прецизионная хирургия и AI-навигация.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
