// https://vike.dev/Head

import logoUrl from "../assets/logo_bg_black.svg";

export default function HeadDefault() {
  return (
    <>
      <link rel="canonical" href="https://vargtech.fr/" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="VargTech — Le web au service des pros" />
      <meta property="og:description" content="Simple. Efficace. Rentable. Des outils pour votre métier." />
      <meta property="og:url" content="https://vargtech.fr/" />
      <meta property="og:image" content="https://vargtech.fr/assets/og/og-image-1200x630.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="VargTech — Le web au service des pros" />
      <meta name="twitter:description" content="Simple. Efficace. Rentable. Des outils pour votre métier." />
      <meta name="twitter:image" content="https://vargtech.fr/assets/og/og-image-1200x630.jpg" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "VargTech",
            url: "https://vargtech.fr",
            logo: "https://vargtech.fr/assets/logo_bg_black.svg",
            founder: {
              "@type": "Person",
              name: "Michael Derrien",
            },
          }),
        }}
      ></script>
      <link rel="icon" href={logoUrl} />
    </>
  );
}
