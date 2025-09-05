import clsx from "clsx";

import callSVG from "./icons/call.svg";
import iterrationSVG from "./icons/iterration.svg";
import perimeterDefinitionSVG from "./icons/perimeter_definition.svg";
import quoteSVG from "./icons/quote.svg";
import rocketSVG from "./icons/rocket.svg";
import supportSVG from "./icons/support.svg";

const processSteps = [
  {
    text: "Premier échange (30 min) pour comprendre vos besoins",
    icon: callSVG,
    alt: "Icon d'échange",
  },
  {
    text: "Définition claire du périmètre et des fonctionnalités",
    icon: perimeterDefinitionSVG,
    alt: "Icon de check-list",
  },
  {
    text: "Proposition chiffrée et validation",
    icon: quoteSVG,
    alt: "Icon de proposition chiffrée",
  },
  {
    text: "Développement itératif avec maquettes, démonstrations et retours réguliers",
    icon: iterrationSVG,
    alt: "Icon d'itération",
  },
  {
    text: "Mise en production et livraison finale",
    icon: rocketSVG,
    alt: "Icon de fusée",
  },
  {
    text: "Support et ajustements inclus pendant 3 mois après la livraison",
    icon: supportSVG,
    alt: "Icon de calendrier",
  },
];

export default function ProcessSection({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 md:max-w-3xl m-auto md:pt-[12vh]`,
        className,
      )}
    >
      <div className="p-3 w-full">
        <h2 className="text-center font-bold text-xl mb-8">
          Un processus simple et efficace
        </h2>
        <ul className="space-y-1">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={index}
                className={clsx(
                  "flex items-center gap-4 px-4 py-2 rounded-lg",
                  isEven ? "flex-row" : "flex-row-reverse",
                )}
              >
                <div className="flex-shrink-0">
                  <img
                    src={step.icon}
                    alt={step.alt}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div
                  className={clsx(
                    "flex-1",
                    isEven ? "text-left" : "text-right",
                  )}
                >
                  <span className="text-sm md:text-base">{step.text}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
