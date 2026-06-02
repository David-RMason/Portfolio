import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const id = hash ? hash.replace("#", "") : null;

    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const tryScroll = (attempt = 0) => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 5) {
        setTimeout(() => tryScroll(attempt + 1), 50);
      }
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(tryScroll);
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}
