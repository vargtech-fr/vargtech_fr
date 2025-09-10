import clsx from "clsx";
import { useState } from "react";

const packages = [
  {
    name: "Pack intégration",
    description: "Intégration d'une maquette Figma en React",
    price: 1200,
    duration: "2-3 jours",
  },

  {
    name: "Pack MVP Express",
    description:
      "Tester rapidement une idée ou remplacer un excel trop complexe",
    price: 7000,
    duration: "2-3 semaines",
  },
  {
    name: "Pack Croissance",
    description:
      "Pour automatiser un process métier ou centraliser vos données.",
    price: 18000,
    duration: "1.5-2 mois",
  },
  {
    name: "Pack Performance",
    description: "Pour un outil stratégique ou multi-équipes",
    price: 30000,
    duration: "3-6 mois",
  },
];

export default function PriceSection({ className }: { className?: string }) {
  const [type, setType] = useState<"forfait" | "regie">("forfait");

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
          Des tarif claires et adaptés à vos besoins
        </h2>
        <div>
          <div className="flex flex-row w-full justify-around">
            <div
              className={clsx(
                "rounded-tl-md grow text-center p-1 transition-all duration-100",
                type === "forfait"
                  ? "bg-violet-500 text-white font-bold"
                  : `cursor-pointer bg-violet-200 text-black
                    hover:bg-violet-400`,
              )}
              onClick={() => setType("forfait")}
            >
              Forfaits
            </div>
            <div
              className={clsx(
                "rounded-tr-md grow text-center p-1 transition-all duration-100",
                type === "regie"
                  ? "bg-violet-500 text-white font-bold"
                  : `cursor-pointer bg-violet-200 text-black
                    hover:bg-violet-400`,
              )}
              onClick={() => setType("regie")}
            >
              Accompagnement
            </div>
          </div>
          <div
            className="flex flex-col items-center border-violet-500 border-2
              rounded-b-lg p-4"
          >
            {type === "forfait" ? (
              <div className="flex flex-col items-stretch w-full">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="mb-4 last:mb-0 w-full text-center bg-teal-100 p-2
                      rounded-md text-black"
                  >
                    <div className="text-xl font-bold">{pkg.name}</div>
                    <div>{pkg.description}</div>
                    <div>
                      À partir de{" "}
                      <span className="font-bold">{pkg.price}€ HT</span>
                      <span className="text-sm">~{pkg.duration}.</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-stretch w-full">
                <div
                  className="mb-4 last:mb-0 w-full text-center bg-teal-100 p-2
                    rounded-md text-black"
                >
                  <div className="text-xl font-bold">A l&apos;heure</div>
                  <div>
                    À partir de <span className="font-bold">80€ HT</span>
                    <span className="text-sm">~1h.</span>
                  </div>
                </div>
                <div
                  className="mb-4 last:mb-0 w-full text-center bg-teal-100 p-2
                    rounded-md text-black"
                >
                  <div className="text-xl font-bold">A la journée</div>
                  <div>
                    À partir de <span className="font-bold">650€ HT</span>
                    <span className="text-sm">~6-8h.</span>
                  </div>
                </div>

                <div
                  className="mb-4 last:mb-0 w-full text-center bg-teal-100 p-2
                    rounded-md text-black"
                >
                  <div className="text-xl font-bold">
                    Mission longue
                    <br />
                    Tech Lead/renfort d&apos;équipe
                  </div>
                  <div>
                    À partir de <span className="font-bold">10000€ HT</span>
                    /mois
                    <div className="text-sm">
                      Intégration dans vos équipes, cadrage technique,
                      mentoring, revue d&apos;architecture
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
