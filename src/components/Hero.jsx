import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Modal from "./Modal";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="HOME"
      className="flex flex-col items-center w-full  bg-orange py-10 gap-10 pt-20 md:pt-10"
    >
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="flex justify-center md:justify-end w-full h-full items-center md:items-start  px-5 flex-col gap-4 border-b-2 py-5 md:border-0 md:py-0 border-carbon/20">
          <h1 className="text-7xl font-Archivo text-cream flex flex-col items-center md:items-start">
            <span className="block">Web</span>
            <span className="block">Developer</span>
          </h1>
          <a
            href="https://www.upwork.com/freelancers/~01d17e915aa3bbb76b?mp_source=share"
            target="_blank"
            className="bg-cream px-5 py-1 rounded-full font-Sora flex items-center justify-center text-brown gap-2 hover:gap-5 transition-all duration-300"
          >
            <span className="size-3 rounded-full bg-brown relative">
              <span className="size-3 rounded-full bg-brown animate-ping absolute top-0 left-0"></span>
            </span>
            Available for work
          </a>
        </div>
        <div className="w-full h-full  flex justify-end text-end px-5">
          <Nav onClick={() => setShowModal(true)} />
        </div>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal} />

      <button
        onClick={() => setShowModal(true)}
        className="text-cream text-2xl font-semibold font-Sora ring-2 ring-cream rounded-full w-52 py-2 cursor-pointer hover:bg-cream hover:text-orange active:scale-90 transition-all duration-300 md:hidden"
      >
        Hire Me
      </button>
    </div>
  );
}

export default Hero;
