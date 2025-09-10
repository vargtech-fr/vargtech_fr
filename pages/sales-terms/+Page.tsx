export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4 pb-12 text-neutral-200 snap-start">
      <a href="/" className="btn-primary mb-2">
        Accueil
      </a>
      <header>
        <h1 className="mb-2 text-3xl font-bold">
          Conditions générales de vente (CGV)
        </h1>
        <p className="text-sm text-neutral-300">
          Dernière mise à jour : <time dateTime="2025-08-24">24 août 2025</time>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          1. Champ d&apos;application (B2B)
        </h2>
        <p>
          Les présentes CGV régissent les prestations de services de
          développement logiciel sur mesure fournies par{" "}
          <strong>VARGTECH (EURL)</strong>, 13 rue de Pendille, 44720
          Saint-Joachim — SIREN 953 268 174, R.C.S. Saint-Nazaire 953 268 174.
          Elles s&apos;appliquent exclusivement aux clients professionnels.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          2. Processus et documents contractuels
        </h2>
        <ul className="list-disc pl-6">
          <li>Entretien de découverte et cadrage fonctionnel.</li>
          <li>
            Proposition chiffrée et devis précisant périmètre, livrables,
            planning indicatif.
          </li>
          <li>
            Acceptation du devis et versement de l&apos;acompte (cf. 3)
            déclenchant le démarrage.
          </li>
          <li>Réalisation, démonstrations, échanges de retours.</li>
          <li>Livraison (cf. 4), facturation du solde, garantie (cf. 6).</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          3. Prix, acompte et paiement
        </h2>
        <p>
          Un acompte de <strong>30&nbsp;%</strong> du montant TTC du devis est
          exigé à l&apos;acceptation. Le solde est payable par{" "}
          <strong>virement bancaire</strong> à <strong>30 jours nets</strong> à
          compter de la livraison. Tout retard de paiement entraîne
          l&apos;application des pénalités légales et de l&apos;indemnité
          forfaitaire pour frais de recouvrement prévue par le Code de commerce.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">4. Livraison</h2>
        <p>
          La livraison intervient lorsque le livrable est rendu accessible au
          client : déploiement dans le cloud (hébergement distant) ou
          installation locale prête à l&apos;usage (on-premise). La mise en
          production peut être réalisée par le client ou par VARGTECH selon ce
          qui est prévu au devis.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          5. Propriété intellectuelle
        </h2>
        <p>
          Après complet paiement, le client reçoit un droit d&apos;utilisation
          et d&apos;exploitation non exclusif sur les livrables spécifiques
          réalisés. VARGTECH conserve la propriété pleine et entière de ses
          éléments préexistants et briques génériques (librairies, snippets,
          outils, savoir-faire) et se réserve le droit de les réutiliser. Sauf
          accord écrit spécifique, aucune exclusivité n&apos;est consentie.
        </p>
        <p>
          <strong>Licence.</strong> Après paiement intégral, le Client bénéficie
          d&apos;une
          <strong>
            {" "}
            licence non exclusive, mondiale et perpétuelle d&apos;usage interne
          </strong>
          sur les livrables, incluant le droit de{" "}
          <strong>modifier, corriger et faire évoluer</strong> ceux-ci et de{" "}
          <strong>
            faire intervenir des prestataires agissant pour son compte
          </strong>
          . Sont exclus, sans accord écrit de VARGTECH : la{" "}
          <strong>revente</strong>, la <strong>redistribution publique</strong>{" "}
          et la
          <strong> sous-licence</strong> à des tiers hors groupe du Client. Le
          Client s&apos;engage à respecter les{" "}
          <strong>licences open-source</strong> des composants intégrés.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          6. Garantie et maintenance
        </h2>
        <p>
          Une garantie de <strong>3 mois</strong> couvre la correction des
          anomalies bloquantes ou majeures relevant du périmètre livré. Sont
          exclus : évolutions non prévues, problèmes dus à une mauvaise
          utilisation, modifications tierces ou environnement non conforme.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          7. Confidentialité et communication
        </h2>
        <p>
          Les parties gardent confidentielles les informations non publiques
          échangées. VARGTECH peut signer un NDA sur demande. Sauf stipulation
          expresse contraire, VARGTECH peut citer le nom du client et présenter
          une description générale non détaillée du projet à des fins de
          référence.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">8. Sous-traitance</h2>
        <p>
          VARGTECH peut sous-traiter tout ou partie des prestations. À la
          demande du client, la sous-traitance peut être exclue pour un projet
          identifié ; cette exclusion doit figurer au devis ou dans un avenant.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          9. Responsabilité — obligation de moyens
        </h2>
        <p>
          Les prestations étant de nature intellectuelle, VARGTECH est tenue à
          une <strong>obligation de moyens</strong>. La responsabilité est
          limitée aux dommages directs, prouvés, résultant d&apos;un manquement
          caractérisé, et en tout état de cause au montant HT payé pour la phase
          concernée. Sont exclus les dommages indirects (perte de données, de
          chiffre d&apos;affaires, d&apos;opportunités, etc.).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          10. Résiliation / annulation
        </h2>
        <p>
          En cas d&apos;annulation avant démarrage, l&apos;acompte reste acquis.
          En cas d&apos;arrêt en cours, le client règle le{" "}
          <strong>prorata du temps passé</strong> (et/ou des lots déjà livrés)
          en sus de l&apos;acompte conservé. Les sources et livrables en cours
          sont remis dans l&apos;état à la date d&apos;effet de la résiliation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">11. Force majeure</h2>
        <p>
          Aucune partie n&apos;est responsable si l&apos;inexécution résulte
          d&apos;un cas de force majeure au sens du droit français (catastrophe
          naturelle, guerre, crise sanitaire, pannes majeures, etc.). Pour un
          indépendant, une maladie grave empêchant l&apos;exécution constitue un
          cas de force majeure. Les échéances sont suspendues pour la durée de
          l&apos;empêchement.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          12. Droit applicable et juridiction
        </h2>
        <p>
          Les présentes CGV sont régies par le droit français. Tout différend
          relatif à leur formation, leur exécution ou leur interprétation relève
          des juridictions compétentes de <strong>Saint-Nazaire</strong>.
        </p>
      </section>
    </main>
  );
}
