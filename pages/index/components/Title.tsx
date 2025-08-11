import logoUrl from "@assets/logo_no_bg.svg";

export default function Title() {
  return (
    <h1
      className="font-quintessential relative pt-8 flex w-full items-center
        justify-center text-center text-5xl text-violet-300"
    >
      <span className="animate-fade-in animation-delay-250">Varg</span>
      <img
        className="animate-fade-in mx-2 inline-block h-[12vh] max-h-32"
        src={logoUrl}
        alt="VargTech Logo"
      />
      <span className="animate-fade-in animation-delay-250">Tech</span>
    </h1>
  );
}
