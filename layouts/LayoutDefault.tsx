import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import "./style.css";

import "./tailwind.css";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-5xl m-auto h-screen bg-diagonal-pattern">
      <Menubar className="p-5 flex flex-row shrink-0" />
      <div className="grow overflow-auto p-8 bg-diagonal-pattern">{children}</div>
      <Footer className="px-5 py-3" />
    </div>
  );
}
