import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import { ToastProvider } from "@/app/context/ToastContext";

const SITE_URL = "https://torrenzgaming.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Torrenz Gaming – PS5 Gaming Centre in Perambur, Chennai",
    template: "%s | Torrenz Gaming Chennai",
  },
  description:
    "Torrenz Gaming is a premium PS5 gaming centre in Perambur, Chennai — 4 consoles, snacks and beverages, easy online booking. Solo ₹200/hr, groups ₹150/person/hr.",
  keywords: [
    "gaming centre Chennai", "gaming center near me", "PS5 lounge Chennai",
    "gaming cafe Perambur", "Torrenz Gaming", "Torrenz Gaming Chennai",
    "PS5 gaming Perambur", "console gaming Chennai", "gaming lounge near me",
    "birthday gaming party Chennai", "book gaming session Chennai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Torrenz Gaming",
    title: "Torrenz Gaming – PS5 Gaming Centre in Perambur, Chennai",
    description:
      "Premium PS5 gaming centre in Perambur, Chennai. Snacks, beverages, and easy online booking.",
    images: [{
      url: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781542712/gaming_lounge_setup_1_kigpow.png",
      width: 1200, height: 630, alt: "Torrenz Gaming lounge",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torrenz Gaming – PS5 Gaming Centre in Perambur, Chennai",
    description: "Premium PS5 gaming centre in Perambur, Chennai. Book your slot online.",
    images: ["https://res.cloudinary.com/dxvui0xkz/image/upload/v1781542712/gaming_lounge_setup_1_kigpow.png"],
  },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: "Torrenz Gaming",
  description: "Premium PS5 gaming centre and lounge in Perambur, Chennai.",
  url: SITE_URL,
  telephone: "+91 86103 26056",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Siva Elango Salai, Periyar Nagar West, Jawahar Nagar",
    addressLocality: "Perambur, Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600082",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 11:00-24:00",
  image: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781542712/gaming_lounge_setup_1_kigpow.png",
};

export const viewport: Viewport = {
  themeColor: "#08050f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800;900&family=Rajdhani:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
