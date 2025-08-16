import clsx from "clsx";

export default function FinalCTA({ className }: { className?: string }) {
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
            Parlons de votre projet !
          </h2>
          {/* Calendly + mail + message*/}
          <div>
            Parce-qu&apos;un outil adapté, c&apos;est plus de temps pour votre
            cœur de métier.
          </div>
        </div>
        <div>
          <h2 className="text-center font-bold text-xl">
            {/* Prevoir icons */}
            Retrouvez-moi aussi sur
            <ul>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Malt</li>
            </ul>
          </h2>
        </div>
      </div>
    </section>
  );
}
