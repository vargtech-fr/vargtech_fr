import clsx from "clsx";

export default function ProcessSection({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4`,
        className,
      )}
    >
      <div className="p-3">
        <div>
          <h2 className="text-center font-bold text-xl">
            Un processus simple et efficace
          </h2>
          <ul className="list-disc pl-5">
            <li>Premier appel de 30 minutes: découverte de vos besoins</li>
            <li>Réalisation d&apos;un cahier des charges</li>
            <li>
              Après validation, mise en place d&apos;un devis et signature
            </li>
            <li>Tout au long du projet, suivi avec maquettes, démo, retours</li>
            <li>Livraison finale</li>
            <li>Suivi post-livraison pendant 3 mois</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
