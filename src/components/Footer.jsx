import InstagramIcon from "../icons/InstagramIcon";
import GithubIcon from "../icons/GithubIcon";
import MailIcon from "../icons/MailIcon";
import WorldIcon from "../icons/WorldIcon";

function Footer() {
  return (
    <footer className="w-full flex flex-col p-5 pt-10 bg-cream gap-20">
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col gap-2 text-3xl">
          <span className="font-Archivo">Archivo Black</span>
          <span className="font-Inter">Inter</span>
          <span className="font-Sora">Sora</span>
        </div>
        <div className="flex items-end justify-center">
          <button className="bg-orange text-cream text-3xl font-semibold font-Inter w-80 py-3 rounded-full">
            Let's Talk!
          </button>
        </div>
        <div className="flex items-start justify-end">
          <ul className="flex gap-5">
            <li className="size-5 rounded-full bg-orange"></li>
            <li className="size-5 rounded-full bg-carbon"></li>
            <li className="size-5 rounded-full bg-cream border border-carbon/50"></li>
            <li className="size-5 rounded-full bg-brown"></li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 font-Sora items-end">
        <p>Carlos Osorio Cardona</p>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center gap-10">
            <a href="#">
              <span>
                <InstagramIcon sizes={30} />
              </span>
            </a>
            <a href="#">
              <span>
                <MailIcon sizes={30} />
              </span>
            </a>
            <a href="#">
              <span>
                <GithubIcon sizes={30} />
              </span>
            </a>
            <a href="#">
              <span>
                <WorldIcon sizes={30} />
              </span>
            </a>
          </div>
          <div className="flex items-center gap-16">
            <a href="#">Iconos</a>
            <a href="#">Mockups</a>
            <a href="#">Fonts</a>
          </div>
        </div>
        <p className="justify-end flex">2025</p>
      </div>
    </footer>
  );
}

export default Footer;
