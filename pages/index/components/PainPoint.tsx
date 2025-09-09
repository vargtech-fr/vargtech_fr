import clsx from "clsx";

export default function PainPoint({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 md:max-w-1/2 m-auto md:pt-[12vh]`,
        className,
      )}
    >
      <div className="p-3">
        <div>
          <h2 className="text-center font-bold text-xl mb-3">
            Vos projets méritent mieux.
          </h2>
          <div className="rounded-2xl p-3 mb-3 border-2 border-violet-400">
            <span className="font-bold">
              Vos projets tournent au ralentis ?
            </span>
            <ul className="list-disc pl-5">
              <li>Des outils bricolés ou dépassés vous freinent</li>
              <li>Des process manuels vous font perdre du temps</li>
              <li>Vos fichiers Excel explosent en complexité</li>
              <li>Vos équipes tech manquent de cadre et de visibilité</li>
            </ul>
          </div>
          <div className="p-3 font-bold">
            {/* SVG road stop symbol  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 inline-block mr-2 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM7.47 7.47a.75.75 0 0 1 1.06 0L12 10.94l3.47-3.47a.75.75 0 0 1 1.06 1.06L13.06 12l3.47 3.47a.75.75 0 0 1-1.06 1.06L12 13.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L10.94 12 7.47 8.53a.75.75 0 0 1 0-1.06z"
                clipRule="evenodd"
              />
            </svg>
            Ensemble, changeons ça !
          </div>
          <div className="bg-green-300 rounded-2xl p-3 text-black">
            <span className="font-bold">Reprennez le contrôle avec :</span>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold">Des outils web sur mesure</span>,
                clairs et fiables, pour votre métier.
              </li>
              <li>
                <span className="font-bold">
                  Un <span title="Minimum Viable Product">MVP</span> rapide et
                  solide
                </span>
                , pour tester vos idées sans perte de temps ni dépenses
                inutiles.
              </li>
              <li>
                <span className="font-bold">
                  Un accompagnement technique Go/React
                </span>
                , pour sécuriser vos projets et accélérer vos équipes.
              </li>
            </ul>
          </div>
        </div>
        {/* TODO: snail shadow on the red area bottom line, on the left. Car shadow on the green area bottom right. */}
        <div className="pt-3 inline-block"></div>
      </div>
    </section>
  );
}
