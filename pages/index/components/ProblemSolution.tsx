import portraitUrl from "@assets/portrait-200w.webp";
import clsx from "clsx";

export default function ProblemSolution({ className }: { className?: string }) {
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
            Vos outils vous freinent ?
          </h2>
          <div className="pt-3">
            Vous perdez du temps avec
            <ul className="list-disc pl-5">
              <li>des outils mal adaptés ?</li>
              <li>des process manuels ?</li>
              <li>des fichiers Excel bricolés ?</li>
            </ul>
          </div>
        </div>
        <div className="pt-3 inline-block">
          <img
            className="w-36 px-2 pb-2 float-right"
            src={portraitUrl}
            alt="Portrait de Michael Derrien"
          />
          <div className="text-justify">
            Je conçois des applications web sur mesure pour vous faire gagner du
            temps, alléger votre quotidien et améliorer votre productivité.
          </div>
        </div>
        <div>
          Mon objectif : vous permettre de vous concentrer sur votre cœur de
          métier pendant que le bon outil fait le reste.
        </div>
      </div>
    </section>
  );
}
