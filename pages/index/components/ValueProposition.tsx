import clsx from "clsx";

export default function ValueProposition({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 xl:max-w-1/2 m-auto`,
        className,
      )}
    >
      <div className="p-3">
        <div>
          <h2 className="text-center font-bold text-xl">
            Travailler avec moi, c&apos;est:
          </h2>
          <ul className="list-disc pl-5">
            <li>Des outils clairs et pérennes</li>
            <li>Une collaboration fluide et transparente</li>
            <li>
              Plus de 10 ans d&apos;expérience sur des projets complexes au
              service de <span className="font-bold">vos besoins</span>
            </li>
            <li>Une expertise technique forte et diversifiée</li>
          </ul>
        </div>
        <div className="pt-3 inline-block">
          <h3>Pourquoi préférer un freelance à une agence ?</h3>
          Travailler avec un freelance, c&apos;est bénéficier d&apos;une{" "}
          <span className="font-bold">
            relation directe et personnalisée, sans intermédiaire.
          </span>
        </div>
      </div>
    </section>
  );
}
