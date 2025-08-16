export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-8
        animate-fade-in animation-delay-500 pt-[12vh]"
    >
      <div
        className="flex flex-col items-center gap-4 text-center text-violet-300"
      >
        <h2 className="text-2xl font-bold">Le web au service des pro.</h2>
        <p className="text-xl">
          Simple. Efficace. Rentable. <br /> Des outils pour{" "}
          <span className="text-atlantis-500 font-bold relative">
            votre métier.
            <span
              className="absolute inset-x-0 -bottom-1 h-1 bg-atlantis-500
                animate-underline animation-delay-1000"
            ></span>
          </span>
        </p>
      </div>
      <div className="relative w-full z-0">
        <div className="px-5 max-w-md mx-auto">
          <div className="pb-2 text-center font-bold">
            Un projet ? Parlons-en !
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
        {/* FIXME: néon perfectible */}

        <div className="absolute inset-0 -z-10">
          <svg
            preserveAspectRatio="none"
            className="absolute inset-0 flex items-center justify-center w-full
              h-full"
            viewBox="200 0 500 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                filter="url(#neon-auto-boost)"
                className="stroke-atlantis-500"
                d="M0 200
              Q 250 000 550 100
              T 1000 200
              "
                strokeWidth="4"
              />
            </g>
            <g>
              <path
                filter="url(#neon-auto-boost)"
                className="stroke-violet-500"
                d="M0 025
              Q 350 200 750 100
              T 1000 200"
                strokeWidth="4"
              />
            </g>
            <defs>
              <filter
                id="neon-auto-boost"
                x="-60%"
                y="-60%"
                width="220%"
                height="220%"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2"
                  result="b1"
                />
                <feGaussianBlur in="b1" stdDeviation="6" result="b2" />
                <feComponentTransfer in="b2" result="glow">
                  <feFuncA type="gamma" exponent="0.6" amplitude="1" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
