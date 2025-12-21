export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Merovia',
    description: 'Leading US-based technology solutions provider specializing in e-commerce platforms, custom software development, and SaaS products.',
    url: 'https://merovia.co',
    logo: 'https://merovia.co/logo.png',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 N Gould St',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-775-618-3683',
      email: 'contact@merovia.co',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://merovia.co',
    name: 'Merovia',
    image: 'https://merovia.co/og-image.png',
    description: 'E-commerce, Software Development, and SaaS Solutions Provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 N Gould St',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.7966,
      longitude: -106.9561,
    },
    telephone: '+1-775-618-3683',
    email: 'contact@merovia.co',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Technology Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Merovia',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Solutions',
            description: 'Comprehensive online store development with inventory management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Development',
            description: 'Custom software solutions tailored to your business needs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Products',
            description: 'Scalable cloud-based software solutions with subscription models',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
