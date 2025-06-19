import MenuButton from "./MenuButton";

function Nav({ onClick }) {
  const sections = ["Home", "Projects", "Experience"];

  return (
    <>
      <nav className="h-20 fixed top-0 w-screen left-0 flex px-5 items-center justify-end md:hidden z-20">
        <button>
          <MenuButton />
        </button>
      </nav>
      <nav className="md:flex flex-col gap-16 items-end px-5 hidden">
        <div className="flex flex-col gap-4">
          {sections.map((s, i) => (
            <a
              href={`#${s.toUpperCase()}`}
              key={i}
              className={`text-3xl uppercase font-Archivo text-carbon ${
                i == 0 ? "bg-carbon text-cream rounded-full px-8" : ""
              } hover:bg-carbon/50 hover:text-cream hover:rounded-full hover:px-10  transition-all duration-200  self-end py-1`}
            >
              {s}
            </a>
          ))}
        </div>

        <button
          onClick={() => onClick()}
          className="text-cream text-2xl font-semibold font-Sora ring-2 ring-cream rounded-full w-52 py-2 cursor-pointer hover:bg-cream hover:text-orange active:scale-90 transition-all duration-300"
        >
          Hire Me
        </button>
      </nav>
    </>
  );
}

export default Nav;
