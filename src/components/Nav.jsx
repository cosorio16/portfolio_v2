import { useState } from "react";

function Nav() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = ["Home", "Projects", "Experience", "Contact"];

  return (
    <nav className="flex flex-col gap-16 items-end px-5">
      <div className="flex flex-col gap-4">
        {sections.map((s, i) => (
          <a
            href={`#${s.toUpperCase()}`}
            key={i}
            className={`text-3xl uppercase font-Archivo text-carbon ${
              i == activeSection
                ? "bg-carbon text-cream rounded-full px-5 "
                : ""
            } hover:bg-carbon/50 hover:text-cream hover:rounded-full hover:px-5  transition-all duration-200  self-end py-1`}
          >
            {s}
          </a>
        ))}
      </div>

      <button className="text-cream text-2xl font-semibold font-Sora ring-2 ring-cream rounded-full w-52 py-2 cursor-pointer transition-all duration-300">
        Hire Me
      </button>
    </nav>
  );
}

export default Nav;
