import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <main className="max-w-7xl flex flex-col justify-center m-auto gap-5">
      <Header />
      <Hero />
    </main>
  );
}

export default Home;
