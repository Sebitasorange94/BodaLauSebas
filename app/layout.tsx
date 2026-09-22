import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lau & Sebas | Nuestra Boda",
  description:
    "Nos casamos el 20 de febrero de 2027 en la Hacienda Pilares del Rosal. ¡Acompáñanos en el día más importante de nuestras vidas!",
  // Cuando tengan el dominio definitivo, cámbienlo aquí para que
  // la tarjeta de vista previa (WhatsApp, etc.) funcione perfecta:
  metadataBase: new URL("https://lau-y-sebas.vercel.app"),
  openGraph: {
    title: "Lau & Sebas | Nuestra Boda",
    description:
      "20 de febrero de 2027 · Hacienda Pilares del Rosal, El Rosal, Cundinamarca",
    images: ["/images/portada.jpg"],
    locale: "es_CO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} h-full`}
    >
      <body className="h-full overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
