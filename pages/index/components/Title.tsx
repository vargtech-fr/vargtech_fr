import logoUrl from "@assets/logo_no_bg.svg";

export default function Title() {
  return (
    <h1 className="flex w-full items-center justify-center text-center text-3xl font-bold">
      <span className="">Varg</span>
      <img className="mx-2 inline-block max-h-32" src={logoUrl} alt="VargTech Logo" />
      <span className="">Tech</span>
    </h1>
  );
}
