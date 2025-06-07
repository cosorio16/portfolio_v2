import Header from "./Header";
import Nav from "./Nav";

function Hero() {
  return (
    <div
      id="HOME"
      className="flex flex-col items-center w-full  bg-orange py-8 gap-10"
    >
      <Header />
      <div className="grid grid-cols-2 w-full h-full">
        <div className="flex justify-end w-full h-full   items-start px-5 flex-col gap-4">
          <h1 className="text-7xl font-Archivo text-cream">
            <span className="block">Web</span>
            <span className="block">Developer</span>
          </h1>
          <a
            href="https://www.upwork.com/freelancers/~01d17e915aa3bbb76b?mp_source=share"
            target="_blank"
            className="bg-cream px-5 py-1 rounded-full font-Sora flex items-center justify-center text-brown gap-2 hover:scale-105 transition-all duration-300"
            
          >
            <span className="size-3 rounded-full bg-brown relative">
              <span className="size-3 rounded-full bg-brown animate-ping absolute top-0 left-0"></span>
            </span>
            Available for work
          </a>
        </div>
        <div className="w-full h-full  flex justify-end text-end px-5">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Hero;
