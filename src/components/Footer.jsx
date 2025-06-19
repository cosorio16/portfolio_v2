import InstagramIcon from "../icons/InstagramIcon";
import GithubIcon from "../icons/GithubIcon";
import MailIcon from "../icons/MailIcon";
import Arrow from "../icons/Arrow";
import UpworkIcon from "../icons/UpworkIcon";

function Footer() {
  return (
    <footer
      id="CONTACT"
      className="w-full flex flex-col p-5 pt-10 bg-cream gap-20 border-2 border-b-0 border-carbon/20 dark:border-white/20"
    >
      <div className="grid grid-cols-1 gap-5 items-center lg:grid-cols-3 w-full">
        <div className="flex items-center flex-wrap justify-between lg:flex-col gap-2 text-3xl">
          <span className="font-Archivo">Archivo Black</span>
          <span className="font-Inter">Inter</span>
          <span className="font-Sora">Sora</span>
        </div>
        <div className="flex items-end justify-center">
          <a
            href="https://www.instagram.com/osorio_2004_/"
            target="_blank"
            className="bg-orange text-cream text-3xl font-semibold font-Inter w-80 py-3 rounded-full flex gap-4 justify-center items-center hover:gap-10 transition-all duration-300 cursor-pointer"
          >
            Let's Talk!
            <span>
              <Arrow sizes={30} />
            </span>
          </a>
        </div>
        <div className="flex items-start justify-center lg:justify-end">
          <ul className="flex gap-5">
            <li className="transition hover:scale-150 size-5 rounded-full bg-orange"></li>
            <li className="transition hover:scale-150 size-5 rounded-full bg-carbon"></li>
            <li className="transition hover:scale-150 size-5 rounded-full bg-cream border border-carbon/50"></li>
            <li className="transition hover:scale-150 size-5 rounded-full bg-brown"></li>
          </ul>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap justify-center gap-5 font-Sora items-end">
        <p>Carlos Osorio Cardona</p>
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex items-center gap-10">
            <a
              href="#"
              target="_blank"
              className="aspect-square rounded-full p-1 hover:bg-orange hover:text-cream hover:scale-105 transition "
            >
              <span>
                <InstagramIcon sizes={30} />
              </span>
            </a>
            <a
              href="mailto:carlososorio1230@gmail.com"
              target="_blank"
              className="aspect-square rounded-full p-1 hover:bg-orange hover:text-cream hover:scale-105 transition "
            >
              <span>
                <MailIcon sizes={30} />
              </span>
            </a>
            <a
              href="https://github.com/cosorio16"
              target="_blank"
              className="aspect-square rounded-full p-1 hover:bg-orange hover:text-cream hover:scale-105 transition "
            >
              <span>
                <GithubIcon sizes={30} />
              </span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d17e915aa3bbb76b"
              target="_blank"
              className="aspect-square rounded-full p-1 hover:bg-orange hover:text-cream hover:scale-105 transition "
            >
              <span>
                <UpworkIcon sizes={30} />
              </span>
            </a>
          </div>
          <div className="flex items-center gap-16">
            <a
              href="http://yesicon.app/"
              target="_blank"
              className="border-b border-transparent hover:border-b-carbon/30 transition"
            >
              Iconos
            </a>
            <a
              href="https://shots.so/"
              target="_blank"
              className="border-b border-transparent hover:border-b-carbon/30 transition"
            >
              Mockups
            </a>
            <a
              href="fonts.google.com"
              target="_blank"
              className="border-b border-transparent hover:border-b-carbon/30 transition"
            >
              Fonts
            </a>
          </div>
        </div>
        <p className="lg:justify-end flex w-full justify-center">2025</p>
      </div>
    </footer>
  );
}

export default Footer;
