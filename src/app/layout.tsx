import type { Metadata } from "next";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruna Muzitano | Psicóloga TCC",
  description: "Atendimento especializado em Terapia Cognitivo-Comportamental.",
  icons: {
    icon: "/icone.PNG", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}