export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4 pb-12 text-neutral-200 snap-start">
      <a href="/" className="btn-primary mb-2">
        Accueil
      </a>
      <header>
        <h1 className="mb-2 text-3xl font-bold">Mentions légales</h1>
        <p className="text-sm text-neutral-300">
          Dernière mise à jour : <time dateTime="2025-08-08">8 août 2025</time>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">1. Éditeur du site</h2>
        <div
          className="bg-neutral-violet-950 rounded-xl border border-gray-200
            p-4"
        >
          <p className="font-bold">
            VargTech (Entreprise unipersonnelle à responsabilité limitée)
          </p>
          <address className="not-italic">
            13 rue de Pendille
            <br />
            44720 Saint-Joachim — France
          </address>
          <p className="mt-2">
            Email :{" "}
            <a href="mailto:michael.derrien@vargtech.fr">
              michael.derrien@vargtech.fr
            </a>
            <br />
            SIRET : 953 268 174 00018 + <br />
            RCS : 953 268 174 R.C.S. Saint-Nazaire
            <br />
            Capital social : 1 000 €<br />
            Numéro de TVA intracommunautaire : FR94 953 268 174
            <br />
            Directeur de la publication : <strong>Michael Derrien</strong>
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">7. Autres informations</h2>
        <p>
          Vous pouvez consulter également nos{" "}
          <a href="/terms" className="underline">
            Conditions Générales d&apos;Utilisation (CGU)
          </a>{" "}
          et nos{" "}
          <a href="/sales-terms" className="underline">
            Conditions Générales de Vente (CGV)
          </a>
          .
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">2. Hébergement</h2>
        <p>
          Le site est hébergé par : <strong>GitHub, Inc.</strong>
          <br />
          88 Colin P. Kelly Jr St, San Francisco, CA 94107, États-Unis.
          <br />
          Service :{" "}
          <a
            href="https://pages.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages
          </a>
          .
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          3. Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble des contenus de ce site (textes, images, graphismes,
          logos, icônes, codes, etc.) est la propriété exclusive de{" "}
          <strong>VargTech</strong>, sauf mention contraire, et est protégé par
          le droit d&apos;auteur et les lois françaises et internationales
          applicables.
        </p>
        <p className="mt-2">
          Toute reproduction, représentation, modification, publication ou
          adaptation, totale ou partielle, des éléments du site, par quelque
          moyen que ce soit, est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">4. Responsabilité</h2>
        <p>
          Les informations fournies sur ce site le sont à titre indicatif.
          Malgré des mises à jour régulières, <strong>VargTech</strong> ne
          saurait être tenue responsable des erreurs, omissions, ou de
          l&apos;indisponibilité temporaire du site. L&apos;utilisateur demeure
          responsable de l&apos;usage qu&apos;il fait des informations fournies.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          5. Données personnelles & cookies
        </h2>
        <p>
          Ce site statique ne dépose aucun cookie de suivi et ne collecte pas de
          données personnelles à l&apos;insu des visiteurs. Si un moyen de
          contact est utilisé (email, prise de rendez-vous, etc.), les
          informations communiquées ne sont utilisées que pour répondre à la
          demande et ne sont pas cédées à des tiers.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">6. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. Tout
          litige relatif à leur interprétation et/ou leur exécution relève des
          juridictions françaises compétentes.
        </p>
      </section>
    </main>
  );
}
