import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brihaspati Cast Pvt. Ltd.",
    "url": "https://brihaspatialloys.in",
    "logo": "https://brihaspatialloys.in/icon.png",
    "description": "Leading manufacturer of ferrous & non-ferrous lost wax castings and industrial components.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 70, Road No. 8, KIADB Industrial Area",
      "addressLocality": "Kittur",
      "addressRegion": "Karnataka",
      "postalCode": "591115",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.6033,
      "longitude": 74.7820
    },
    "telephone": "+91 8310432701",
    "areaServed": "Kittur, Belagavi"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brihaspati Cast",
    "url": "https://brihaspatialloys.in"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
