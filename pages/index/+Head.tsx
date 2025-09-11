// FAQ Data pour JSON-LD - Spécifique à la page d'accueil
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment sont définis vos tarifs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mes forfaits sont basés sur le périmètre fonctionnel, la complexité et la valeur créée. Pour les livrables cadrés, je privilégie un prix fixe. Pour les missions longues (Tech Lead / renfort d'équipe), je fonctionne au forfait mensuel.",
      },
    },
    {
      "@type": "Question",
      name: "Les durées affichées sont-elles garanties ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ce sont des durées indicatives. Elles varient selon le périmètre final et la rapidité des échanges. Après un atelier de cadrage, je fournis un planning précis avec jalons et démos.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles technologies utilisez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Principalement Go (backend), React/Tailwind (frontend) et PostgreSQL. J'intègre si besoin des briques comme Kafka, PostGIS, des CI/CD et de la supervision.",
      },
    },
    {
      "@type": "Question",
      name: "Pouvez-vous renforcer une équipe existante ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. J'interviens en Tech Lead ou développeur senior intégré : cadrage technique, mentoring, revues d'architecture, accélération des livraisons.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous uniquement à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je travaille principalement en remote (basé à Saint-Joachim, Pays de la Loire). Déplacements possibles autour de Nantes, Rennes, Saint-Nazaire et Vannes.",
      },
    },
  ],
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
