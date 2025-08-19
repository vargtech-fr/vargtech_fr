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
          <h2 className="text-center font-bold text-xl mb-2">
            Un processus simple et efficace
          </h2>
          <ul className="list-disc pl-5">
            <li>Premier échange (30 min) pour comprendre vos besoins</li>
            <li>Définition claire du périmètre et des fonctionnalités</li>
            <li>Proposition chiffrée et validation</li>
            <li>
              Développement itératif avec maquettes, démonstrations et retours
              réguliers
            </li>
            <li>Mise en production et livraison finale</li>
            <li>
              Support et ajustements inclus pendant 3 mois après la livraison
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
