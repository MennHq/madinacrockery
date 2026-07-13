import React from 'react';
import { useLocation } from 'react-router-dom';

export default function StructuredData() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 1. Website Schema
  const websiteData = {
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

  // Shared rating and review variables for rich result snippets
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "352",
    "reviewCount": "12"
  };

  const reviews = [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Babar Hassan"
      },
      "datePublished": "2026-06-04",
      "reviewBody": "One of the best wholesale suppliers of steel crockery in town. Also supply to surrounding towns in bulk. Prices are moderate and very fine quality.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ahsan Haroon"
      },
      "datePublished": "2026-05-04",
      "reviewBody": "Good dealing. Mature variety. The quality of steel crockery is exceptional.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Usman"
      },
      "datePublished": "2026-06-19",
      "reviewBody": "Average variety but Good Rates. Reliable wholesale partner for many years.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Aslam Khan"
      },
      "datePublished": "2026-06-02",
      "reviewBody": "All over crockery you buy from here.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }
  ];

  // 2. LocalBusiness Schema (with aggregate rating & reviews)
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
    ],
    "aggregateRating": aggregateRating,
    "review": reviews
  };

  // 3. ShoppingCenter Schema (with aggregate rating & reviews)
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
    ],
    "aggregateRating": aggregateRating,
    "review": reviews
  };

  // 4. FAQPage Schema
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
      }
    ]
  };

  // 5. Product Rich Results with Rating Snippets
  const productsData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Steel Crockery Set - Heavy Gauge",
      "image": "https://avatars.mds.yandex.net/get-altay/19681410/2a0000019e9bc1f66c937bbb39b5dde43c02/XXXL",
      "description": "Premium quality, heavy-gauge steel plates, spoons, cooking pots and trays. Designed for domestic and commercial longevity.",
      "brand": {
        "@type": "Brand",
        "name": "Madina Steel"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "148"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "4500",
        "highPrice": "35000",
        "offerCount": "12",
        "priceRange": "$$"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Custom Wedding Jahez Crockery Package",
      "image": "https://avatars.mds.yandex.net/get-altay/19871159/2a0000019e9bc1f869db52a8a9cc82188e9d/XXXL",
      "description": "Complete customized wedding packages including dinnerware, luxury cutlery, glassware, non-stick cooking pots, and tea sets.",
      "brand": {
        "@type": "Brand",
        "name": "Madina Crockery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "204"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "20000",
        "highPrice": "120000",
        "offerCount": "6",
        "priceRange": "$$$"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Luxury Bone China Dinner Set",
      "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "description": "Elegant translucent bone china dinner plates, soup bowls, and serving platters with subtle metallic trims.",
      "brand": {
        "@type": "Brand",
        "name": "Royal Madina"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "96"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "15000",
        "highPrice": "65000",
        "offerCount": "8",
        "priceRange": "$$"
      }
    }
  ];

  // 6. Dynamic BreadcrumbList Schema
  const getBreadcrumbData = () => {
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://madinacrockery.vercel.app/"
      }
    ];

    if (currentPath === '/about') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://madinacrockery.vercel.app/about"
      });
    } else if (currentPath === '/blog') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Knowledge Blog",
        "item": "https://madinacrockery.vercel.app/blog"
      });
    } else if (currentPath === '/faq') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Frequently Asked Questions",
        "item": "https://madinacrockery.vercel.app/faq"
      });
    } else if (currentPath === '/contact') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://madinacrockery.vercel.app/contact"
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingCenterData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbData()) }}
      />
      {productsData.map((prod, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(prod) }}
        />
      ))}
    </>
  );
}
