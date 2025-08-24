export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4 pb-12 text-neutral-200 snap-start">
      <a href="/" className="btn-primary mb-2">
        Accueil
      </a>
      <header>
        <h1 className="mb-2 text-3xl font-bold">
          Conditions générales d&apos;utilisation (CGU)
        </h1>
        <p className="text-sm text-neutral-300">
          Dernière mise à jour : <time dateTime="2025-08-24">24 août 2025</time>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          1. Champ d&apos;application
        </h2>
        <p>
          Les présentes CGU encadrent l&apos;accès et l&apos;usage du site{" "}
          <a href="https://vargtech.fr" className="underline">
            vargtech.fr
          </a>
          , édité par <strong>VARGTECH (EURL)</strong>, 13 rue de Pendille,
          44720 Saint‑Joachim, France — SIREN 953 268 174, R.C.S. Saint‑Nazaire
          953 268 174.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          2. Accès et disponibilité
        </h2>
        <p>
          Le site est accessible 24h/24, 7j/7, sauf opérations de maintenance ou
          cas de force majeure. VARGTECH ne garantit ni l&apos;absence
          d&apos;erreurs ni une disponibilité continue et ne saurait être tenue
          responsable des indisponibilités liées au réseau ou à l&apos;hébergeur
          (GitHub Pages).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          3. Propriété intellectuelle
        </h2>
        <p>
          Les contenus du site (textes, éléments graphiques, logos, code) sont
          protégés par le droit d&apos;auteur et demeurent la propriété de
          VARGTECH, sauf mention contraire. Toute reproduction ou adaptation
          sans autorisation est interdite.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">4. Données personnelles</h2>
        <p>
          Le site ne collecte que les données strictement nécessaires à la prise
          de contact et à la prise de rendez‑vous via des services tiers (email,
          Calendly). Pour plus d&apos;informations (droits, finalités, durée de
          conservation), consulter la{" "}
          <a href="https://vargtech.fr/privacy-notice/" className="underline">
            Politique de confidentialité
          </a>
          . Aucune désignation de DPO n&apos;est requise au regard de
          l&apos;activité.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          5. Liens et services tiers
        </h2>
        <p>
          Des liens vers des sites tiers (ex. Calendly, LinkedIn) peuvent être
          proposés. VARGTECH décline toute responsabilité quant à leurs
          contenus, politiques et pratiques.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">6. Sécurité</h2>
        <p>
          Le site utilise un chiffrement TLS. L&apos;utilisateur s&apos;engage à
          ne pas perturber le fonctionnement du site ni tenter d&apos;accéder
          aux systèmes sans autorisation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          7. Droit applicable et juridiction
        </h2>
        <p>
          Les présentes CGU sont régies par le droit français. Tout litige
          relatif à leur interprétation ou à l&apos;utilisation du site relève
          des juridictions compétentes de Saint-Nazaire.
        </p>
      </section>
    </main>
  );
}
