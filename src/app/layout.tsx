import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Institute of English Language | Coaching Center Gwalior",
  description: "American Institute of English Language — Gwalior ke best English coaching center. Academic aur competition ke liye English sikhe. Thatipur, Gwalior (MP). Call: +918889918111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>
        {children}
      </body>
    </html>
  );
}
