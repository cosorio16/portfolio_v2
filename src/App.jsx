import Hero from "./components/Hero";
import content from "./lib/content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col max-w-7xl m-auto">
      <Hero />
      <section id="PROJECTS" className="grid grid-cols-2 py-10 gap-5 px-5">
        {content.projects.map((p, i) => (
          <Card
            key={i}
            bgColor={p.bgColor}
            image={p.image}
            title={p.name}
            stack={p.stack}
          />
        ))}
      </section>
      <section
        id="EXPERIENCE"
        className="py-16 px-10 text-carbon flex flex-col gap-16"
      >
        <h1 className="text-5xl uppercase text-center font-medium font-Archivo">
          Education & Experience
        </h1>
        <div className="flex flex-col gap-10">
          {content.history.map((c, i) => (
            <>
              <div
                key={i}
                className="grid grid-cols-5 items-center opacity-50 hover:opacity-100 transition-opacity duration-300 font-Sora"
              >
                <p className="font-bold">{c.year}</p>
                <p className="text-3xl uppercase font-semibold text-start col-span-2">
                  {c.role}
                </p>
                <p className="col-span-2">{c.description}</p>
              </div>
              {i + 1 !== content.history.length && (
                <span className="bg-carbon/10 w-full h-0.5"></span>
              )}
            </>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
