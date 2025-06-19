import { createPortal } from "react-dom";
import WhatsappIcon from "../icons/WhatsappIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import UpworkIcon from "../icons/UpworkIcon";
import MailIcon from "../icons/MailIcon";
import PaperIcon from "../icons/PaperIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import DribbleIcon from "../icons/DribbleIcon";
import CloseIcon from "../icons/CloseIcon";

export default function Modal({ onClose, show }) {
  const contact = [
    {
      icon: WhatsappIcon,
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=573206852825&text&type=phone_number&app_absent=0",
    },
    {
      icon: UpworkIcon,
      name: "Upwork",
      link: "https://www.upwork.com/freelancers/~01d17e915aa3bbb76b?mp_source=share",
    },
    {
      icon: GithubIcon,
      name: "GitHub",
      link: "https://github.com/cosorio16/",
    },
    {
      icon: PaperIcon,
      download: true,
      name: "Cv",
      link: "/cv.pdf",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      link: "https://www.instagram.com/osorio_2004_/",
    },
    {
      icon: LinkedinIcon,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/carlos-osorio-a83539284/",
    },
    {
      icon: MailIcon,
      name: "Email",
      link: "mailto:carlososorio1230@gmail.com",
    },
    {
      icon: DribbleIcon,
      name: "Dribbble",
      link: "https://dribbble.com/cocoanispapi",
    },
  ];

  return (
    <>
      {createPortal(
        <div
          onClick={() => onClose()}
          className={`fixed flex items-center justify-center z-20 inset-0 bg-white/50 dark:bg-carbon/50 font-Sora p-2 ${
            show ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition duration-500`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={` bg-white rounded dark:bg-carbon p-10 text-carbon dark:text-white flex flex-col gap-8 ${
              show ? "scale-100" : "scale-0"
            } transition duration-300`}
          >
            <button
              onClick={() => onClose()}
              className="self-end p-2.5 rounded-full hover:bg-carbon/10 dark:hover:bg-cream/10 transition cursor-pointer"
            >
              <span>
                <CloseIcon sizes={30} />
              </span>
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contact.map((c, i) => (
                <a
                  key={i}
                  href={c.link}
                  download={c.download ? true : false}
                  target="_blank"
                  className="flex items-center flex-col gap-2 justify-center p-5 border dark:border-white/20 w-32 border-carbon/30 rounded hover:bg-carbon/10 dark:hover:bg-white/10 transition "
                >
                  <c.icon sizes={30} />
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
