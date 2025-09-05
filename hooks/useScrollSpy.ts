import { RefObject, useEffect, useState } from "react";

export default function useScrollSpy(
  target: RefObject<HTMLElement> | RefObject<null>,
) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  // IntersectionObserver pour surveiller la visibilité
  useEffect(() => {
    const element = target.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = entry.isIntersecting;
        const fullyVisible = entry.intersectionRatio >= 0.99;
        const ratio = entry.intersectionRatio;

        setIsVisible(visible);
        setIsFullyVisible(fullyVisible);
        setIntersectionRatio(ratio);
      },
      {
        threshold: [0, 0.99, 1],
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return {
    isVisible,
    isFullyVisible,
    intersectionRatio,
  };
}
