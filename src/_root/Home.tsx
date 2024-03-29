import About from "./layouts/About";
import CursorMouse from "./components/CursorMouse";
import Hero from "./layouts/Hero";

const Home = () => {
  return (
    <>
      <CursorMouse />
      <Hero />
      <About />
      <div className="min-h-[200dvh]"></div>
    </>
  );
};

export default Home;
