import { useEffect, useState } from "react";
import Menu from "./Menu";

function MenuButton() {
  const [active, setActive] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScrollMenu = () => {
      setBgActive(window.scrollY >= 600);
      if (window.scrollY >= 500 && window.scrollY < 3600) {
        setActiveSection(1);
      } else if (window.scrollY >= 3600) {
        setActiveSection(2);
      } else {
        setActiveSection(0);
      }
    };

    window.addEventListener("scroll", handleScrollMenu);

    handleScrollMenu();

    return () => {
      window.removeEventListener("scroll", handleScrollMenu);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`flex-col gap-1.5 p-3 rounded-full aspect-square flex items-center justify-center relative ${
          bgActive && !active ? "bg-carbon/50" : "bg-transparent"
        } transition duration-300 z-30`}
      >
        <div
          className={`w-9 h-1 bg-cream rounded-full ${
            active ? "opacity-0" : "opacity-100"
          } transition duration-300`}
        ></div>
        <div
          className={`w-9 h-1 bg-cream rounded-full ${
            active ? "rotate-45 absolute" : ""
          } transition duration-300`}
        ></div>
        <div
          className={`w-9 h-1 bg-cream rounded-full ${
            active ? "-rotate-45 absolute" : ""
          } transition duration-300`}
        ></div>
      </div>

      <Menu
        status={active}
        onClose={() => setActive(false)}
        activeSection={activeSection}
      />
    </>
  );
}

export default MenuButton;
