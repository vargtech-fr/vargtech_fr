import Footer from "../components/Footer";

import "./tailwind.css";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="border-x-neutral-violet-950 m-auto flex max-w-5xl flex-col
        border-x-2 bg-black"
    >
      <div className="grow">{children}</div>
      <Footer className="lg:px-5 px-1 lg:py-3 py-1 snap-end" />
    </div>
  );
}
