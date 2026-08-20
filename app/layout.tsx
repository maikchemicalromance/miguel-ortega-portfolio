import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Ortega — Filmmaker · Creador · Crítico",
  description:
    "Miguel Ortega — filmmaker, creador y crítico. Películas, videos, cine, música y cultura.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Miguel Ortega — Filmmaker · Creador · Crítico",
    description:
      "Filmmaker, creador y crítico. Películas, videos, cine, música y cultura.",
    url: "https://miguel-ortega-portfolio.vercel.app",
    siteName: "Miguel Ortega",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miguel Ortega",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Ortega — Filmmaker · Creador · Crítico",
    description:
      "Filmmaker, creador y crítico. Películas, videos, cine, música y cultura.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}