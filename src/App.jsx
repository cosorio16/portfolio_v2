import Hero from "./components/Hero";
import content from "./lib/content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="lg:flex flex-col max-w-7xl m-auto hidden">
        <Hero />
        <section
          id="PROJECTS"
          className="grid grid-cols-2 py-10 gap-5 px-5 border-x-2 border-carbon/20 dark:border-cream/20"
        >
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
        </section>
        <section
          id="EXPERIENCE"
          className="py-16 px-10 text-carbon dark:text-cream flex flex-col gap-16 border-x-2 border-carbon/20 dark:border-cream/20"
        >
          <h1 className="text-5xl uppercase text-center font-medium font-Archivo">
            Education & Experience
          </h1>
          <div className="flex flex-col">
            {content.history.map((c, i) => (
              <>
                <div
                  key={i}
                  className={`grid grid-cols-5 items-center opacity-50 hover:opacity-100 transition-all duration-300 font-Sora gap-6 ${
                    i + 1 !== content.history.length &&
                    "border-b-2 border-carbon/30 dark:border-cream/30"
                  } py-8 hover:py-10`}
                >
                  <p className="font-bold">{c.year}</p>
                  <p className="text-3xl uppercase font-semibold text-start col-span-2">
                    {c.role}
                  </p>
                  <p className="col-span-2">{c.description}</p>
                </div>
              </>
            ))}
          </div>
        </section>
        <Footer />
      </div>

      <div className="w-full h-dvh font-Sora lg:hidden flex items-center justify-center flex-col">
        <div className="w-96 border-carbon/10 border-2 p-3 rounded">
          <p className="mb-4">
            I've been working on my portfolio since <strong>June 7th</strong>.
            Right now, the <span className="font-semibold">desktop</span>{" "}
            version is available.
          </p>
          <p className="mb-4">
            Please access it from a computer to enjoy a more{" "}
            <span className="font-semibold text-orange">complete</span>{" "}
            experience.
          </p>
          <a
            href="https://www.figma.com/proto/keVnKVM4mOMr2QjiMJ7PRE/PORTFOLIO?node-id=141-18"
            className="inline-block mb-6 text-orange hover:text-orange font-medium underline"
            target="_blank"
          >
            This is the Figma
          </a>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 bg-orange text-white rounded hover:scale-105 transition"
            >
              Download CV
            </a>
            <a
              href="https://www.instagram.com/osorio_2004_/"
              target="_blank"
              className="px-4 py-2 bg-carbon text-white rounded hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
