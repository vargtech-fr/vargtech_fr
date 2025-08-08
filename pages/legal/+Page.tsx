export default function Page() {
  return (
    <main className="px-4 py-12 text-neutral-200">
      <header>
        <h1 className="text-3xl font-bold mb-2">Mentions légales</h1>
        <p className="text-sm text-neutral-300">
          Dernière mise à jour : <time dateTime="2025-08-08">8 août 2025</time>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">1. Éditeur du site</h2>
        <div className="bg-neutral-violet-950 border border-gray-200 rounded-xl p-4">
          <p className="font-bold">VargTech (Entreprise unipersonnelle à responsabilité limitée)</p>
          <address className="not-italic">
            13 rue de Pendille
            <br />
            44720 Saint-Joachim — France
          </address>
          <p className="mt-2">
            Email : <a href="mailto:michael.derrien@vargtech.fr">michael.derrien@vargtech.fr</a>
            <br />
            SIRET : 953 268 174 00017
            <br />
            RCS : Saint-Nazaire B 953 268 174
            <br />
            Capital social : 1 000 €<br />
            Numéro de TVA intracommunautaire : FR41953268174
            <br />
            Directeur de la publication : <strong>Michael Derrien</strong>
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">2. Hébergement</h2>
        <p>
          Le site est hébergé par : <strong>GitHub, Inc.</strong>
          <br />
          88 Colin P. Kelly Jr St, San Francisco, CA 94107, États-Unis.
          <br />
          Service :{" "}
          <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
            GitHub Pages
          </a>
          .
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">3. Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus de ce site (textes, images, graphismes, logos, icônes, codes, etc.) est la propriété
          exclusive de <strong>VargTech</strong>, sauf mention contraire, et est protégé par le droit d’auteur et les
          lois françaises et internationales applicables.
        </p>
        <p className="mt-2">
          Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments
          du site, par quelque moyen que ce soit, est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">4. Responsabilité</h2>
        <p>
          Les informations fournies sur ce site le sont à titre indicatif. Malgré des mises à jour régulières,{" "}
          <strong>VargTech</strong> ne saurait être tenue responsable des erreurs, omissions, ou de l’indisponibilité
          temporaire du site. L’utilisateur demeure responsable de l’usage qu’il fait des informations fournies.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">5. Données personnelles & cookies</h2>
        <p>
          Ce site statique ne dépose aucun cookie de suivi et ne collecte pas de données personnelles à l’insu des
          visiteurs. Si un moyen de contact est utilisé (email, prise de rendez-vous, etc.), les informations
          communiquées ne sont utilisées que pour répondre à la demande et ne sont pas cédées à des tiers.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">6. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur interprétation
          et/ou leur exécution relève des juridictions françaises compétentes.
        </p>
      </section>
    </main>
  );
}
