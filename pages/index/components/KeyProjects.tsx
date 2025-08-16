import clsx from "clsx";

import tf1URL from "@assets/clients_logo/TF1.svg";
import ovhURL from "@assets/clients_logo/OVHCloud.svg";
import pattounesURL from "@assets/clients_logo/LesPattounesDeMonique.svg";
import livingPacketsURL from "@assets/clients_logo/LivingPackets.webp";
import diateamURL from "@assets/clients_logo/diateam.png";

export default function KeyProjects({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4`,
        className,
      )}
    >
      <div className="p-3">
        {/* TODO: fil d'arriane verticale au milieu (colone central en ::after) avec un point centré et qui relie du coup les experiences  */}
        <div>
          <h2 className="text-center font-bold text-xl">
            Quelques réalisations
          </h2>
          <div
            className="grid grid-cols-[minmax(0,1fr)_3fr] gap-4 auto-rows-min"
          >
            <div className="flex items-center">
              <img src={tf1URL} alt="Logo TF1" className="w-full" />
            </div>
            <div className="flex items-center">
              Développement d&apos;un outils de devis centralisé en remplacement
              d&apos;un fichier Excel <br /> &rarr; plus de rapidité, moins
              d&apos;erreurs, meilleure fiabilité.
            </div>

            <div className="flex items-center">
              <img src={ovhURL} alt="Logo OVH" className="w-ful" />
            </div>
            <div className="flex items-center">
              Modernisation d&apos;outils internes essentiels. <br /> &rarr;
              outils plus stables, moins d&apos;erreurs coûteuses, meilleur
              contrôle des opérations.
            </div>

            <div className="flex items-center">
              <img
                src={pattounesURL}
                alt="Logo Les Pattounes De Monique"
                className="w-ful"
              />
            </div>
            <div className="flex items-center">
              Création d&apos;un site web &ldquo;vitrine&rdquo; pour faciliter
              l&apos;adoption des chats. <br /> &rarr; meilleure visibilité et
              adoption facilitée.
            </div>

            <div className="flex items-center">
              <img
                src={livingPacketsURL}
                alt="Logo LivingPackets"
                className="w-full"
              />
            </div>
            <div className="flex items-center">
              Développement d&apos;un backend pour la gestion d&apos;emballages
              connectés
            </div>

            <div className="flex items-center">
              <img src={diateamURL} alt="Logo diateam" className="w-full" />
            </div>
            <div className="flex items-center">
              Développement d&apos;outils pour automatiser et contrôler des
              simulations d&apos;attaque/défense. <br /> &rarr; Développement
              d&apos;outils pour automatiser et contrôler des simulations
              d&apos;attaque/défense.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
