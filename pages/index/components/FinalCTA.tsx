import clsx from "clsx";

import maltLogoURL from "@assets/Malt_logo_white.svg";
import githubLogoURL from "@assets/GitHub_Logo.png";
import githubMarkURL from "@assets/github-mark.svg";

export default function FinalCTA({ className }: { className?: string }) {
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
          <h2 className="text-center font-bold text-2xl mb-4">
            Parlons de votre projet !
          </h2>

          <div className="pb-2 text-center font-bold">
            Parce-qu&apos;un outil adapté, c&apos;est plus de temps pour votre
            cœur de métier.
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <a
              href="https://calendly.com/michael-derrien-proton/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full block rounded-2xl bg-blue-600 px-2 py-2 text-lg
                font-bold text-white transition-colors hover:bg-blue-400
                text-center content-center no-underline"
            >
              Prendre rendez&#8209;vous
            </a>
            <div className="text-sm row-start-2 text-center">Appel gratuit</div>
            <a
              href="mailto:michael.derrien@vargtech.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full block rounded-2xl bg-blue-600 px-2 py-2 text-lg
                font-bold text-white transition-colors hover:bg-blue-400
                text-center content-center no-underline"
            >
              Par mail
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-center font-bold text-xl my-3">
            {/* Prevoir icons */}
            Retrouvez-moi aussi sur
            <div className="grid grid-cols-3 items-center mt-3 gap-2">
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
                href="https://github.com/vargtech-fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-md p-2 no-underline text-white flex
                  flex-row items-center hover:scale-105"
              >
                <img
                  src={githubMarkURL}
                  alt="GitHub Mark"
                  className="h-6 inline pr-1"
                />

                <img
                  src={githubLogoURL}
                  alt="GitHub Logo"
                  className="h-6 inline pr-1"
                />
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
          </h2>
        </div>
      </div>
    </section>
  );
}
