import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://madinacrockery.vercel.app/#website",
    "url": "https://madinacrockery.vercel.app/",
    "name": "Madina Crockery Store",
    "alternateName": [
      "Madina Crockery",
      "Madina Crockery Sargodha",
      "Madina Crockery Store Sargodha"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://madinacrockery.vercel.app/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://madinacrockery.vercel.app/#localbusiness",
    "url": "https://madinacrockery.vercel.app/",
    "name": "Madina Crockery Store",
    "description": "Sargodha's oldest and best wholesale shop for high-quality steel crockery, kitchenware, and dinner sets.",
    "image": "https://i.postimg.cc/dVc9yL3F/Untitled-1.png",
    "telephone": "+92483723597",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karkhana Bazaar",
      "addressLocality": "Sargodha",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.085437,
      "longitude": 72.6632889
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
