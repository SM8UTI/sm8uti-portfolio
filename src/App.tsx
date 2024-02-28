/* eslint-disable @typescript-eslint/no-unused-vars */
import LocomotiveScroll from "locomotive-scroll";
import { Loader } from "./_root";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (locomotiveScroll) {
      console.log("Locomotive Scroll is running");
    }
  }, []);

  return (
    <main className="bg-mainBlack-500 text-white font-primary-regular selection:bg-primary-500 selection:text-mianBlack-500">
      {loading ? <Loader setLoading={setLoading} /> : <Outlet />}
    </main>
  );
};

export default App;
