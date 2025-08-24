import clsx from "clsx";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx(
        className,
        `border-t-neutral-violet-800 flex flex-row gap-x-4 gap-y-1 border-t-2
        flex-wrap`,
      )}
    >
      <a href="/legal">Mentions légales</a>
      <a href="/privacy-notice">Politique de confidentialité</a>
      <a href="/terms">CGU</a>
      <a href="/sales-terms">CGV</a>
      <span className="ml-auto text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} VargTech. Tous droits réservés.
      </span>
    </footer>
  );
}
