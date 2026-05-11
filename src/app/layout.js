import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
        url: '/cc_logo.png', // Points to the image in the 'public' folder
        width: 1024,
        height: 1024,
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
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
