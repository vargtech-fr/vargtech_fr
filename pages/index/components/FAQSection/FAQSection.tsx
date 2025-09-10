import { clsx } from "clsx";

import faqs from "./data";

export default function FAQSection({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        `relative flex flex-col items-center gap-8 animate-fade-in
        animation-delay-500 pt-4 md:max-w-1/2 m-auto md:pt-[12vh]`,
        className,
      )}
    >
      <header className="mb-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <p className="mt-2 text-sm text-white/70">
          Réponses aux questions les plus fréquentes. Besoin d&apos;un cas
          particulier ? Écrivez-moi.
        </p>
      </header>

      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-white/15 bg-white/5 p-4
              transition hover:border-white/25"
          >
            <summary
              className="flex cursor-pointer list-none items-start
                justify-between gap-3"
            >
              <h3 className="text-base font-medium leading-tight">{item.q}</h3>
              <span
                className="mt-0.5 shrink-0 rounded-full p-1 transition
                  group-open:rotate-180"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down opacity-70"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-sm leading-relaxed text-white/80">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-6 text-xs text-white/60">
        *Les durées affichées sur la page Tarifs sont <b>indicatives</b> et
        peuvent varier selon le périmètre et la réactivité des échanges.
      </p>
    </section>
  );
}
