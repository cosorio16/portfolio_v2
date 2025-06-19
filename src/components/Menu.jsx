function Menu({ status, onClose, activeSection }) {
  const sections = ["Home", "Projects", "Experience"];
  return (
    <div
      className={`fixed inset-0 bg-orange z-20 ${
        status ? "translate-y-0" : "-translate-y-full"
      } transition duration-300 flex items-center justify-center`}
    >
      <div className="flex flex-col gap-4">
        {sections.map((s, i) => (
          <a
            href={`#${s.toUpperCase()}`}
            key={i}
            onClick={() => onClose()}
            className={`text-3xl uppercase font-Archivo text-carbon ${
              i == activeSection ? "bg-carbon text-cream rounded-full px-8" : ""
            } hover:bg-carbon/50 hover:text-cream hover:rounded-full hover:px-10  transition-all duration-200 py-1`}
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;
