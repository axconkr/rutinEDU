
import React from 'react';

const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "루틴에듀학원",
    "description": "은평구 초중고 국영수과 전문 학원. 올바른 공부 루틴을 형성하여 성적을 향상시킵니다.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "서울시",
      "addressRegion": "은평구",
      "streetAddress": "은평구 일대 (상세주소 협의)",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.6027,
      "longitude": 126.9291
    },
    "telephone": "+82-2-000-0000",
    "url": "https://routine-edu.com",
    "openingHours": "Mo-Fr 14:00-22:00, Sa 10:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "과목 정보",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "국어" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "영어" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "수학" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "과학" } }
      ]
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default JsonLd;
