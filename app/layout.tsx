import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gonzalo Villasuso | Automotora en Punta del Este",
    template: "%s | Gonzalo Villasuso",
  },
  description:
    "Automotora Gonzalo Villasuso en Av. Roosevelt Parada 8, Punta del Este. Compra y venta de vehículos seleccionados BMW, MINI y Mazda.",
  openGraph: {
    title: "Gonzalo Villasuso | Automotora",
    description:
      "Vehículos exclusivos en Av. Roosevelt Parada 8, Punta del Este.",
    siteName: "Gonzalo Villasuso",
    url: "https://gonzalovillasuso.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-ground text-ink">{children}</body>
    </html>
  );
}
