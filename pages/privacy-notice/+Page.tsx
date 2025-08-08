export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-neutral-200">
      <header>
        <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-neutral-300">
          Dernière mise à jour : <time dateTime="2025-08-08">8 août 2025</time>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">1. Objet</h2>
        <p>
          Cette politique de confidentialité décrit la manière dont le site <strong>VargTech</strong> utilise et protège
          les informations concernant ses visiteurs. Elle concerne uniquement ce site web statique hébergé sur GitHub
          Pages.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">2. Responsable du site</h2>
        <p>
          <strong>VargTech (EURL)</strong> — 13 rue de Pendille, 44720 Saint-Joachim — France.
          <br />
          Email : <a href="mailto:michael.derrien@vargtech.fr">michael.derrien@vargtech.fr</a>
          <br />
          Directeur de la publication : <strong>Michael Derrien</strong>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">3. Données collectées sur ce site</h2>
        <p>
          Ce site ne collecte pas directement de données personnelles. Aucune inscription, aucun formulaire et aucun
          cookie de suivi tiers ne sont utilisés.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">4. Services tiers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Prise de rendez-vous</strong> : un lien vers la plateforme{" "}
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Calendly
            </a>{" "}
            est proposé. En cliquant sur ce lien, vous quittez ce site et êtes soumis à la{" "}
            <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
              politique de confidentialité de Calendly
            </a>
            .
          </li>
          <li>
            <strong>Statistiques de visite (optionnel)</strong> : en cas d’activation future de Matomo auto-hébergé,
            seules des données anonymisées (pages vues, durée, navigateur, localisation approximative) seraient
            collectées pour mesurer l’audience.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">5. Sécurité</h2>
        <p>
          Ce site est hébergé sur GitHub Pages et bénéficie d’une connexion sécurisée HTTPS. Des journaux techniques
          anonymes peuvent être conservés par l’hébergeur à des fins de sécurité.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">6. Vos droits</h2>
        <p>
          Bien que ce site ne collecte pas directement vos données, si vous interagissez avec des services tiers comme
          Calendly, vous pouvez exercer vos droits d’accès, rectification ou suppression auprès de ces services selon
          leurs procédures.
        </p>
        <p className="mt-2">
          Pour toute question concernant cette politique :{" "}
          <a href="mailto:michael.derrien@vargtech.fr">michael.derrien@vargtech.fr</a>
        </p>
      </section>
    </main>
  );
}
