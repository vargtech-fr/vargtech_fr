import clsx from "clsx";
import logoUrl from "../assets/logo.svg";

export default function Menubar({ className }: { className?: string }) {
  return (
    <div id="menubar" className={clsx(className, "bg-black border-b-2 border-b-neutral-violet-800")}>
      <Logo />
    </div>
  );
}

function Logo() {
  return (
    <div className={"p-1 mb-1"}>
      <a href="/">
        <img src={logoUrl} className="max-h-24" alt="logo" />
      </a>
    </div>
  );
}
