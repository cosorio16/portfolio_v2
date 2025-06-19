import { useEffect, useState } from "react";
import Arrow from "../icons/Arrow";

function ScrollToUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 400);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 -rotate-90 p-3 bg-dark ring text-cream ring-white/50 rounded-full  transition cursor-pointer z-10 dark:bg-cream dark:text-carbon bg-carbon  ${
        show
          ? "opacity-80 hover:opacity-100 scale-100 hover:scale-150"
          : "pointer-events-none scale-0"
      }`}
    >
      <span>
        <Arrow sizes={30} />
      </span>
    </button>
  );
}

export default ScrollToUp;
