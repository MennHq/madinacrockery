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
    "description": "Sargodha's oldest and best wholesale shop for high-quality steel crockery, kitchenware, and wedding dinner sets since 1949.",
    "image": "https://i.postimg.cc/dVc9yL3F/Untitled-1.png",
    "logo": "https://i.postimg.cc/dVc9yL3F/Untitled-1.png",
    "telephone": "+923207000700",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karkhana Bazar, Block 6",
      "addressLocality": "Sargodha",
      "addressRegion": "Punjab",
      "postalCode": "40100",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.0836,
      "longitude": 72.6711
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/madinacrockery",
      "https://www.instagram.com/madinacrockerystore"
    ]
  };

  const faqPageData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best and oldest crockery shop in Sargodha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Madina Crockery Store is widely recognized as the best and oldest crockery shop in Sargodha, serving generations of customers with premium kitchenware and home decor."
        }
      },
      {
        "@type": "Question",
        "name": "When was Madina Crockery Store founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Madina Crockery Store was founded in 1949, making it a historic and trusted name in the region's retail market."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the owner of Madina Crockery Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The owner of Madina Crockery Store is M. Harun Khokhar."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Madina Crockery Store located in Sargodha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Madina Crockery Store is located in Karkhana Bazaar, Sargodha, Punjab, Pakistan, with an additional presence near Trust Plaza."
        }
      },
      {
        "@type": "Question",
        "name": "Which crockery shop offers wholesale rates in Sargodha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Madina Crockery Store offers the best wholesale rates in Sargodha for commercial dealers, wedding packages, and bulk kitchenware buyers."
        }
      },
      {
        "@type": "Question",
        "name": "What types of products are available at Madina Crockery Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide a complete range of dinner sets, non-stick cookware, luxury cutlery, glassware, imported fancy crockery, and home electronics."
        }
      },
      {
        "@type": "Question",
        "name": "Does Madina Crockery Store provide wedding jahez packages in Sargodha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in complete, customizable wedding jahez crockery packages at highly affordable wholesale rates."
        }
      },
      {
        "@type": "Question",
        "name": "Can I order online from Madina Crockery Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can browse our catalog and place your orders online through our official website at https://vercel.app."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver crockery items outside of Sargodha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer secure packing and delivery services across Punjab and other major cities in Pakistan for bulk and retail orders."
        }
      },
      {
        "@type": "Question",
        "name": "What are the opening hours of Madina Crockery Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our retail branch in Karkhana Bazaar, Sargodha is open from Monday to Saturday, usually from 10:00 AM to 9:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Does Madina Crockery Store sell branded kitchenware?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we stock top national and international brands for non-stick pots, pressure cookers, and luxury glass dinner sets."
        }
      }
    ]
  };

  const shoppingCenterData = {
    "@context": "https://schema.org",
    "@type": "ShoppingCenter",
    "@id": "https://madinacrockery.vercel.app/#shoppingcenter",
    "url": "https://madinacrockery.vercel.app/",
    "name": "Madina Crockery Store",
    "description": "Sargodha's oldest and best wholesale shop for high-quality steel crockery, kitchenware, and wedding dinner sets since 1949.",
    "image": "https://i.postimg.cc/dVc9yL3F/Untitled-1.png",
    "logo": "https://i.postimg.cc/dVc9yL3F/Untitled-1.png",
    "telephone": "+923207000700",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karkhana Bazar, Block 6",
      "addressLocality": "Sargodha",
      "addressRegion": "Punjab",
      "postalCode": "40100",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.0836,
      "longitude": 72.6711
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/madinacrockery",
      "https://www.instagram.com/madinacrockerystore"
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingCenterData) }}
      />
    </>
  );
}
