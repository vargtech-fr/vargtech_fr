import Menubar from "../components/Menubat";
import "./style.css";

import "./tailwind.css";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col max-w-5xl m-auto h-screen"}>
      <Menubar />
      <div className="grow">{children}</div>
      <footer className={"p-5 border-t border-t-gray-200"}>
        <a href="/legal">Mentions légales</a>
        <a href="/privacy-notice">Politique de confidentialité</a>
      </footer>
    </div>
  );
}
