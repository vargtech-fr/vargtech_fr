import clsx from "clsx";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx(className, "border-t-neutral-violet-800 flex flex-row gap-4 border-t-2")}>
      <a href="/legal">Mentions légales</a>
      <a href="/privacy-notice">Politique de confidentialité</a>
      <span className="ml-auto text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} VargTech. Tous droits réservés.
      </span>
    </footer>
  );
}
