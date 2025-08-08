import logoUrl from "../assets/logo.svg";

export default function Menubar() {
  return (
    <div id="menubar" className={"p-5 flex flex-row shrink-0 border-r-2 border-r-gray-200"}>
      <Logo />
    </div>
  );
}

function Logo() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
