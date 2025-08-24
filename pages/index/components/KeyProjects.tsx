import clsx from "clsx";

import tf1URL from "@assets/clients_logo/TF1.svg";
import ovhURL from "@assets/clients_logo/OVHCloud.svg";
import pattounesURL from "@assets/clients_logo/LesPattounesDeMonique.svg";
import livingPacketsURL from "@assets/clients_logo/LivingPackets.webp";
import diateamURL from "@assets/clients_logo/diateam.png";

const projectsData = [
  {
    id: 0,
    companyName: "TF1",
    logo: tf1URL,
    content: (
      <div>
        Développement d&apos;un outils de devis centralisé en remplacement
        d&apos;un fichier Excel <br /> &rarr; plus de rapidité, moins
        d&apos;erreurs, meilleure fiabilité.
      </div>
    ),
  },
  {
    id: 1,
    companyName: "OVH",
    logo: ovhURL,
    content: (
      <div>
        Modernisation d&apos;outils internes essentiels. <br /> &rarr; outils
        plus stables, moins d&apos;erreurs coûteuses, meilleur contrôle des
        opérations.
      </div>
    ),
  },
  {
    id: 2,
    companyName: "Les Pattounes De Monique",
    logo: pattounesURL,
    content: (
      <div>
        Création d&apos;un site web &ldquo;vitrine&rdquo; pour faciliter
        l&apos;adoption des chats. <br /> &rarr; meilleure visibilité et
        adoption facilitée.
      </div>
    ),
  },
  {
    id: 3,
    companyName: "LivingPackets",
    logo: livingPacketsURL,
    content: (
      <div>
        Développement d&apos;un backend pour la gestion d&apos;emballages
        connectés
      </div>
    ),
  },
  {
    id: 4,
    companyName: "diateam",
    logo: diateamURL,
    logoClassName: "bg-black p-1",
    content: (
      <div>
        Développement d&apos;outils pour automatiser et contrôler des
        simulations d&apos;attaque/défense. <br /> &rarr; Développement
        d&apos;outils pour automatiser et contrôler des simulations
        d&apos;attaque/défense.
      </div>
    ),
  },
];

export default function KeyProjects({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 md:max-w-1/2 m-auto md:pt-[12vh]`,
        className,
      )}
    >
      <div className="p-3">
        {/* TODO: fil d'arriane verticale au milieu (colone central en ::after) avec un point centré et qui relie du coup les experiences  */}
        <div>
          <h2 className="text-center font-bold text-xl mb-2">
            Quelques réalisations
          </h2>
          <div
            className="grid grid-cols-[minmax(0,1fr)_3fr] gap-4 auto-rows-min
              bg-teal-50 p-2 text-neutral-violet-950 rounded-xl"
          >
            {projectsData.map((project) => (
              <>
                <div key={project.id} className="flex items-center">
                  <img
                    src={project.logo}
                    alt={`Logo ${project.companyName}`}
                    className={clsx("w-full", project.logoClassName)}
                  />
                </div>
                <div className="flex-1">{project.content}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
