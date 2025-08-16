import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Scroller() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed bottom-4 w-10 h-16 -translate-x-1/2 left-1/2",
        "transition-opacity duration-500",
        isAtBottom ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
      title="Section suivante"
      onClick={() => {
        document.documentElement?.scrollBy({ top: 1, behavior: "smooth" });
      }}
    >
      <svg viewBox="0 0 24 32" className="w-10 h-16 cursor-pointer">
        <path
          d="M12 4v20m0 0l-8-8m8 8l8-8"
          className="stroke-violet-900 stroke-3 animate-pulse"
          fill="none"
        />
      </svg>
    </div>
  );
}
