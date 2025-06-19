import { useState } from "react";
import WorldIcon from "../icons/WorldIcon";
import GithubIcon from "../icons/GithubIcon";
import Arrow from "../icons/Arrow";

function Card({ image, bgColor, title, stack, gitHub, link, download }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative rounded"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{ backgroundColor: `#${bgColor}` }}
        className={`absolute left-0 bottom-0 ${
          hover ? "h-full" : "h-0 pointer-events-none"
        } transition-all duration-300 w-full `}
      >
        <div
          className={`h-full w-full flex flex-col gap-2 items-center p-5 ${
            hover ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } transition-all duration-100`}
        >
          <div className="flex items-center gap-4 w-full justify-end">
            <a
              href={gitHub}
              target="_blank"
              className="text-cream p-3 hover:scale-105 hover:bg-carbon/50 rounded-full transition-all duration-300"
            >
              <span>
                <GithubIcon sizes={30} />
              </span>
            </a>
            <a
              href={link}
              target="_blank"
              className="-rotate-45 text-cream p-3 hover:scale-105 hover:bg-carbon/50 rounded-full transition-all duration-300"
            >
              <span>
                <Arrow sizes={25} />
              </span>
            </a>
          </div>
          <div className="grow items-center justify-center flex flex-col gap-1">
            <h1 className="font-Archivo font-semibold text-4xl uppercase text-cream text-center">
              {title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {stack &&
                stack.map((s, i) => (
                  <span
                    key={i}
                    className="bg-carbon/50 text-cream px-5 py-1 rounded-full font-Sora font-medium min-w-fit"
                  >
                    {s}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: `#${bgColor}`,
        }}
        className="p-1 aspect-square w-full flex items-center justify-center"
      >
        <img src={image} alt="" className=" object-center object-cover p-10" />
      </div>
    </div>
  );
}

export default Card;
