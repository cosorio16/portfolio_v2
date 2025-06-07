import Clock from "./Clock";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import WorldIcon from "../icons/WorldIcon";

function Header() {
  return (
    <header className="flex items-center justify-between w-full px-5">
      <div className="w-48 flex">
        <div className="bg-cream rounded-full flex items-center justify-center">
          <img src="/1.png" alt="" className="size-20 p-4 " />
        </div>
      </div>
      <div className="grow flex items-center justify-center">
        <Clock />
      </div>
      <nav className="flex items-center gap-8 text-cream pr-5">
        <a
          href="https://github.com/cosorio16"
          target="_blank"
          className="p-1 hover:scale-110 hover:text-cream hover:bg-carbon/50 rounded-full transition-all duration-300"
        >
          <span>
            <GithubIcon sizes={35} />
          </span>
        </a>
        <a
          href="https://www.instagram.com/osorio_2004_/"
          target="_blank"
          className="p-1 hover:scale-110 hover:text-cream hover:bg-carbon/50 rounded-full transition-all duration-300"
        >
          <span>
            <InstagramIcon sizes={35} />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          className="p-1 hover:scale-110 hover:text-cream hover:bg-carbon/50 rounded-full transition-all duration-300"
        >
          <span>
            <WorldIcon sizes={35} />
          </span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
