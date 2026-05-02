import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Core metadata
  title: "Castillo & Co. LLC | Data & Web Solutions",
  description: "Empowering individuals and small businesses with custom web applications, intuitive dashboards, and data-driven insights.",
  
  // Open Graph (OG) metadata for social sharing
  openGraph: {
    title: "Castillo & Co. LLC | Data & Web Solutions",
    description: "Data-driven solutions engineered for your business impact.",
    url: 'https://castilloandco.com',
    siteName: 'Castillo & Co. LLC',
    images: [
      {
        url: 'public/logo-share.png', // Points to the image in the 'public' folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}