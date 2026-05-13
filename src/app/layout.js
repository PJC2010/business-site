import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = 'https://castilloandco.net';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Castillo & Co. LLC | Digital Growth & Web Solutions",
    template: "%s | Castillo & Co. LLC",
  },
  description: "Castillo & Co. LLC helps small businesses and content creators scale with custom web design, social media strategy, content creation, and AI-powered automation.",

  keywords: [
    "web design",
    "web development",
    "social media strategy",
    "content creation",
    "business automation",
    "AI automation",
    "digital marketing",
    "SEO",
    "small business",
    "digital agency",
    "Castillo and Co",
  ],

  authors: [{ name: "Castillo & Co. LLC", url: siteUrl }],
  creator: "Castillo & Co. LLC",
  publisher: "Castillo & Co. LLC",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Castillo & Co. LLC | Digital Growth & Web Solutions",
    description: "Custom web design, social media strategy, content creation, and AI automation for small businesses and creators.",
    url: siteUrl,
    siteName: 'Castillo & Co. LLC',
    images: [
      {
        url: '/cc_logo.png',
        width: 1024,
        height: 1024,
        alt: 'Castillo & Co. LLC logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Castillo & Co. LLC | Digital Growth & Web Solutions",
    description: "Custom web design, social media strategy, content creation, and AI automation for small businesses and creators.",
    images: ['/cc_logo.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Castillo & Co. LLC",
  url: "https://castilloandco.net",
  logo: "https://castilloandco.net/cc_logo.png",
  image: "https://castilloandco.net/cc_logo.png",
  description: "Castillo & Co. LLC helps small businesses and content creators scale with custom web design, social media strategy, content creation, and AI-powered automation.",
  email: "pc@castilloandco.net",
  areaServed: "US",
  serviceType: [
    "Web Design",
    "Web Development",
    "Social Media Strategy",
    "Content Creation",
    "AI Automation",
    "Digital Marketing",
    "Business Consulting",
  ],
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
