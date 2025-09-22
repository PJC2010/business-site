import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Core metadata
  title: "Pete Castillo | Data Scientist & Web Developer",
  description: "I help businesses grow by building custom web applications, intuitive dashboards, and data-driven solutions. Based in Atascocita, TX.",
  
  // Open Graph (OG) metadata for social sharing
  openGraph: {
    title: "Pete Castillo | Data Scientist & Web Developer",
    description: "Data-driven solutions engineered for impact.",
    url: 'https://castillopete.com',
    siteName: 'Pete Castillo Portfolio',
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
        <Footer />
      </body>
    </html>
  );
}