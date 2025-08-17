const CANONICAL = "https://vargtech.fr/";
const LOGO_ABS = "https://vargtech.fr/og/logo.png";

export default function HeadDefault() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "VargTech",
      legalName: "VargTech (EURL)",
      url: "https://vargtech.fr",
      logo: LOGO_ABS,
      sameAs: [
        "https://www.linkedin.com/in/michael-derrien",
        "https://www.linkedin.com/company/vargtech-fr",
      ],
      founder: {
        "@type": "Person",
        name: "Michael Derrien",
        jobTitle: "Développeur freelance Go/React",
        url: "https://vargtech.fr",
        sameAs: ["https://www.linkedin.com/in/michael-derrien"],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Sales",
          email: "michael.derrien@vargtech.fr",
          areaServed: "FR",
          availableLanguage: ["fr", "en"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "13 rue de Pendille",
        postalCode: "44720",
        addressLocality: "Saint-Joachim",
        addressRegion: "Pays de la Loire",
        addressCountry: "FR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Développement d'applications web sur mesure",
      provider: {
        "@type": "Organization",
        name: "VargTech",
        url: "https://vargtech.fr",
      },
      serviceType:
        "Développeur Go/React freelance, MVP SaaS, automatisation des processus",
      areaServed: "France",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://vargtech.fr",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michael Derrien",
      jobTitle: "Développeur freelance Go/React",
      worksFor: {
        "@type": "Organization",
        name: "VargTech",
        url: "https://vargtech.fr",
      },
      sameAs: ["https://www.linkedin.com/in/michael-derrien"],
    },
  ];

  return (
    <>
      <link rel="canonical" href={CANONICAL} />
      <link rel="icon" href="/favicon.svg" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={CANONICAL} />
      <meta property="og:site_name" content="VargTech" />
      <meta property="og:locale" content="fr_FR" />
      <meta name="author" content="Michael Derrien" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
