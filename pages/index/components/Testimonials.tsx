import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import maltLogoURL from "@assets/Malt_logo_white.svg";

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
  {
    id: 5,
    content: (
      <>
        <div
          className="font-bold text-xl w-full h-full flex flex-col items-center
            justify-center"
        >
          Plus de recommandations:
          <div className="grid grid-cols-2 items-center mt-3 gap-2">
            <a
              href="https://www.linkedin.com/in/michael-derrien/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#007EBB] rounded-md p-2 no-underline text-white
                flex flex-row items-center hover:scale-105"
            >
              <svg
                className="h-6 inline pr-1"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                    fill="#007EBB"
                  />
                  <path
                    d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                    fill="#FFF"
                  />
                </g>
              </svg>
              LinkedIn
            </a>

            <a
              href="https://www.malt.fr/profile/michaelderrien"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC5656] rounded-md p-2 no-underline text-white
                flex flex-row items-center hover:scale-105"
            >
              <img
                src={maltLogoURL}
                alt="Malt Logo"
                className="h-6 inline pr-1"
              />
            </a>
          </div>
        </div>
      </>
    ),
    author: "",
  },
];

export default function Testimonials({ className }: { className?: string }) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const target = scrollAreaRef.current;
      const handleScroll = () => {
        console.log(target.scrollLeft, target.offsetWidth);
        setCurrentIndex(Math.round(target.scrollLeft / target.offsetWidth));
      };

      target.addEventListener("scroll", handleScroll);
      return () => {
        target.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollAreaRef]);

  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 md:max-w-1/2 m-auto md:pt-[12vh]`,
        className,
      )}
    >
      <div className="p-3 w-full">
        <div>
          <h2 className="text-center font-bold text-xl w-full mb-2">
            Ce que mes clients en disent
          </h2>
          <div className="m-auto flex flex-row items-stretch gap-0">
            <div
              className={clsx(
                `w-6 relative flex items-center justify-center cursor-pointer
                group transition-opacity duration-300`,
                currentIndex === 0 &&
                  "opacity-0 cursor-none pointer-events-none",
              )}
              onClick={() => {
                if (scrollAreaRef.current) {
                  scrollAreaRef.current.scrollBy({
                    left: -scrollAreaRef.current.offsetWidth,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <svg
                className="w-6 h-6 text-violet-500 group-hover:scale-150
                  transition-transform duration-100 ease-in-out origin-center"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon
                  points="15,5 7,12 15,19"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              ref={scrollAreaRef}
              className="grow grid grid-flow-col auto-cols-[100%] overflow-auto
                gap-4 w-full snap-x snap-mandatory no-scrollbar"
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full snap-center flex flex-col items-center"
                >
                  <div
                    className="bg-teal-50 rounded-md text-violet-950 w-full
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
            <div
              className={clsx(
                `w-6 relative flex items-center justify-center cursor-pointer
                group transition-opacity duration-300`,
                currentIndex === testimonialsData.length - 1 &&
                  "opacity-0 cursor-none pointer-events-none",
              )}
              onClick={() => {
                if (scrollAreaRef.current) {
                  scrollAreaRef.current.scrollBy({
                    left: scrollAreaRef.current.offsetWidth,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <svg
                className="w-6 h-6 text-violet-500 group-hover:scale-150
                  transition-transform duration-100 ease-in-out origin-center"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon
                  points="9,5 17,12 9,19"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
