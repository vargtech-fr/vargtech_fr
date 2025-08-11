import portraitUrl from "@assets/portrait.png";
import clsx from "clsx";

export default function ProblemSolution({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center justify-center gap-8
        animate-fade-in animation-delay-500 pt-[12vh]`,
        className,
      )}
    >
      <div className="mt-16">
        <div>
          <h2 className="text-center font-bold text-xl">
            Vos outils vous freinent ?
          </h2>
          <div className="p-3">
            Vous perdez du temps avec
            <ul className="list-disc pl-5">
              <li>des outils mal adaptés ?</li>
              <li>des process manuels ?</li>
              <li>des fichiers Excel bricolés ?</li>
            </ul>
          </div>
        </div>
        <div className="m-3">
          <img
            className="w-36 pr-2 pb-2 float-left"
            src={portraitUrl}
            alt="Illustration"
          />
          <div>
            Je conçois des applications web sur mesure pour vous faire gagner du
            temps, alléger votre quotidien et améliorer votre productivité.
          </div>
        </div>
        {/* 

            Je vous apporte des solutions:
            <ul className="list-disc pl-5">
              <li>clarté</li>
              <li>efficacité</li>
              <li>pérennité</li>
              <li>fluidité</li>
              <li>transparence</li>
              <li>résultats</li>
            </ul>


🎯 Mon objectif : vous permettre de vous concentrer sur votre cœur de métier pendant que le bon outil fait le reste. */}
      </div>
    </section>
  );
}
