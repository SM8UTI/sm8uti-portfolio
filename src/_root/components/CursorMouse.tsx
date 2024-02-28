/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useSelector } from "react-redux";

const CursorMouse = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const cursorVariant = useSelector((state: any) => state.main.cursorVarients);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      border: "1px solid #30FFCE60",
    },
    text: {
      height: 250,
      width: 250,
      x: mousePosition.x - 125,
      y: mousePosition.y - 125,
      backgroundColor: "#30FFCE30",
      mixBlendMode: "difference",
      border: "none",
    },
    link: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#30FFCE20",
      mixBlendMode: "difference",
      border: "none",
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      className="fixed top-0 left-0 w-8 h-8 bg-accent-500/20 rounded-full pointer-events-none hidden sm:inline-block"
    ></motion.div>
  );
};

export default CursorMouse;
