/* eslint-disable @typescript-eslint/no-unused-vars */
import LocomotiveScroll from "locomotive-scroll";
import { Home, Loader } from "./_root";
import { useEffect, useState } from "react";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (locomotiveScroll) {
      console.log("Locomotive Scroll is running");
    }
  }, []);

  return (
    <main className="bg-mainBlack-500">
      {loading ? <Loader setLoading={setLoading} /> : <Home />}
    </main>
  );
};

export default App;
