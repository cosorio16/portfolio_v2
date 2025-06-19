import Hero from "./components/Hero";
import content from "./lib/content";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ScrollToUp from "./components/ScrollToUp";

function App() {
  const scrollToUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="flex flex-col max-w-7xl m-auto">
        <Hero />
        <section
          id="PROJECTS"
          className="flex flex-col  py-10 gap-5 px-5 border-x-2 border-carbon/20 dark:border-cream/20"
        >
          <h1 className="text-5xl uppercase text-center font-medium font-Archivo text-carbon dark:text-cream">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.projects.map((p, i) => (
              <Card
                key={i}
                bgColor={p.bgColor}
                image={p.image}
                title={p.name}
                stack={p.stack}
                gitHub={p.github}
                link={p.link}
              />
            ))}
          </div>
        </section>
        <section
          id="EXPERIENCE"
          className="py-16 px-10 text-carbon dark:text-cream flex flex-col gap-16 border-x-2 border-carbon/20 dark:border-cream/20"
        >
          <h1 className="text-4xl md:text-5xlS uppercase text-center font-medium font-Archivo">
            Education & Experience
          </h1>
          <div className="flex flex-col hover:cursor-none ">
            {content.history.map((c, i) => (
              <div
                key={i}
                className={`lg:grid lg:grid-cols-5 flex justify-between items-center opacity-100 md:opacity-50 hover:opacity-100 transition-all duration-300 font-Sora gap-6 ${
                  i + 1 !== content.history.length &&
                  "border-b-2 border-carbon/30 dark:border-cream/30"
                } py-8 hover:py-10`}
              >
                <p className="font-bold">{c.year}</p>
                <p className="text-3xl uppercase font-semibold lg:text-start col-span-2 text-end">
                  {c.role}
                </p>
                <p className="col-span-2 hidden lg:block">{c.description}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>

      <ScrollToUp />
    </>
  );
}

export default App;
