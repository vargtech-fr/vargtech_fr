import clsx from "clsx";
import { useRef } from "react";

const testimonialsData = [
  {
    id: 1,
    content: (
      <>
        <p>
          J&apos;ai eu l&apos;occasion de travailler avec Michael dans le cadre
          de plusieurs projets au sein de notre équipe tech. Durant cette
          période, j&apos;ai pu apprécier sa capacité à s&apos;approprier les
          sujets de manière autonome et à relever les défis techniques qui se
          présentaient à lui.
        </p>
        <p>
          Il a su collaborer efficacement avec les équipes produit, en
          entretenant un dialogue régulier et constructif, ce qui a permis de
          faire avancer les sujets dans de bonnes conditions. Son implication et
          sa volonté de bien faire ont été des atouts dans les missions qui lui
          ont été confiées.
        </p>
      </>
    ),
    author: "Christophe Coquelet - Lead Développeur chez TF1",
  },
  {
    id: 2,
    content: (
      <>
        <p>
          J&apos;ai eu la chance de travailler avec Michael pendant deux ans
          chez OVH. Il a rapidement apporté une vraie expertise en Go à
          l&apos;équipe, tout en montant en compétences rapidement sur les
          nouvelles technologies que nous introduisions, comme Vue.js, Kafka,
          etc.
        </p>
        <p>
          Ce que j&apos;ai particulièrement apprécié, c&apos;est sa capacité à
          prendre en main des projets dès le démarrage, à poser les bases
          techniques, faire les bons choix d&apos;architecture, et les mener
          jusqu&apos;à la mise en production. Il a une approche à la fois
          rigoureuse et pragmatique, ce qui en fait un excellent dev.
        </p>
        <p>
          Bref, un collègue fiable, curieux et impliqué avec qui c&apos;est très
          agréable de collaborer !
        </p>
      </>
    ),
    author: "Jérémy Spriet - Tech Lead chez Scaleway",
  },
  {
    id: 3,
    content: (
      <>
        <p>
          Michael a impulsé le lancement d&apos;Open Path View. Il a fait preuve
          d&apos;un capacité d&apos;adaptation impressionnante et est intervenu
          à la fois sur des aspects électroniques et développement embarqués
          mais également développement web.
        </p>
        <p>
          sa maîtrise en python nous a permis d&apos;avancer vite sur le code
          embarqué dans le sac à dos et réaliser rapidement des premières
          captations de visites virtuelles. Passionné il est allé au-delà du
          besoin initial et à même contourné le fonctionnement d&apos;une montre
          connectée pour l&apos;utilisée comme contrôleur.
        </p>
        <p>
          En résumé Michael a été un atout essentiel au développement
          d&apos;Open Path View.
        </p>
      </>
    ),
    author: "Benjamin Bernard - Lead Tech Chez CM Arkéa",
  },
  {
    id: 4,
    content: (
      <>
        <p>
          J&apos;ai travaillé avec Michael lors du développement de notre projet
          IoT. Ses compétences techniques ont permis de définir et de réaliser
          un backend à base de micro-services, le rendant ainsi maintenance et
          scalable, prêt pour la montée en charge de nos utilisateurs et de nos
          objets IoT.
        </p>
        <p>
          Communiquant, à l&apos;écoute, il a su m&apos;accompagner sur
          l&apos;utilisation et l&apos;accès aux services et faire face aux
          changements rapides propres aux startups.
        </p>
        <p>
          En bref, quelqu&apos;un de compétent, réactif, à l&apos;écoute, avec
          qui je retravaillerai avec plaisir
        </p>
      </>
    ),
    author: "Maxime Bianchi - Développeur iOS Chez PA.COTTE",
  },
  // TODO: add button for malt and linkedin recommandations
  // {
  //   id: 5,
  //   content: (
  //     <>
  //       <div>
  //         Retrouvez d&apos;autre recommandations:
  //         <div>LinkedIn</div>
  //         <div>Malt</div>
  //       </div>
  //     </>
  //   ),
  //   author: "",
  // },
];

export default function Testimonials({ className }: { className?: string }) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 xl:max-w-1/2 m-auto`,
        className,
      )}
    >
      <div className="p-3 w-full">
        <div>
          <h2 className="text-center font-bold text-xl w-full">
            Ce que mes clients en disent
          </h2>
          <div
            ref={scrollAreaRef}
            className="grid grid-flow-col auto-cols-[100%] overflow-auto gap-4
              w-full snap-x snap-mandatory"
          >
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full snap-center flex flex-col items-center"
              >
                <div
                  className="w-11/12 bg-teal-50 rounded-md text-violet-950
                    h-full p-3"
                >
                  {testimonial.content}
                  {testimonial.author && (
                    <p className="text-sm text-gray-800 text-right pt-3">
                      {testimonial.author}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
