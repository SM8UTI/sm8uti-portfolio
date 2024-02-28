import { Link } from "react-router-dom";
import MenuHover from "../components/MenuHover";
import { useDispatch } from "react-redux";
import { setCursorVarients } from "../../store/slices/mainslice";
import { FaArrowTurnUp } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const pText = useRef<HTMLParagraphElement>(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      let splitPText: SplitType | null = null;
      if (pText.current) {
        splitPText = new SplitType(pText.current, { lineClass: "char" });
        tl.from(
          ".revel > *",
          {
            opacity: 0,
            y: -200,
            duration: 1.5,
            ease: "circ.inOut",
            stagger: 0.2,
          },
          "a"
        )
          .from(
            ".linkMenu",
            {
              opacity: 0,
              x: 30,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.2,
              rotateX: -90,
            },
            "a+=1"
          )
          .from(".box", {
            width: "0px",
            ease: "power2.out",
          })
          .to(
            ".box .ico",
            {
              rotate: -180,
              ease: "power2.out",
              scale: 1,
              opacity: 1,
              duration: 1,
            },
            "b"
          )
          .from(
            splitPText.chars!,
            {
              opacity: 0,
              x: 30,
              rotateX: -90,
              stagger: 0.01,
            },
            "b"
          );
      }
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      className="w-full h-full min-h-dvh  relative"
      ref={containerRef}
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.6"
    >
      <div className="w-full h-full min-h-dvh  max-w-screen-2xl px-4 sm:px-8 relative flex">
        <div className="nav text-[13px] sm:text-sm font-primary-regular uppercase flex flex-col gap-3 absolute top-6 right-4 sm:right-8 text-right text-text-600">
          {["About", "services", "Projects", "Contact"].map((item, index) => (
            <Link
              to={"#"}
              key={index}
              onMouseEnter={() => dispatch(setCursorVarients("link"))}
              onMouseLeave={() => dispatch(setCursorVarients("default"))}
              className="linkMenu overflow-hidden"
            >
              <MenuHover text={item} />
            </Link>
          ))}
        </div>
        <div
          className="text  self-end pb-4 flex flex-col gap-2 lg:gap-1"
          data-scroll
          data-scroll-speed="0.2"
        >
          <div className="flex flex-row justify-end mb-4 sm:mb-1">
            <p
              className="text-right max-w-[250px] font-primary-regular leading-[1.5] tracking-[.5px] text-md text-text-600 *:lowercase overflow-hidden"
              ref={pText}
            >
              A freelance frontend developer & web designer propelling startup
              visions to reality.
            </p>
          </div>
          <div className="flex flex-row items-center uppercase">
            <div className="box w-[50px] sm:w-[80px] lg:w-[100px] h-[50px] lg:h-[55px] bg-accent-500/20 grid place-content-center text-xl lg:text-2xl font-thin rounded-full overflow-hidden mr-3">
              <FaArrowTurnUp className="rotate-0 scale-0 opacity-0 ico" />
            </div>
            <div className="revel  w-full h-full max-w-fit overflow-hidden">
              <h3 className="text-[6vw] sm:text-[4vw] lg:text-[3vw] opacity-1 -translate-y-[0px] text-text-600 tracking-[1px]">
                Hii There, i'm
              </h3>
            </div>
          </div>
          <div className="revel  w-full h-full max-w-fit overflow-hidden uppercase">
            <h1
              className="text-[11vw] sm:text-[10vw] lg:text-[8.2vw] font-primary-bold leading-[1.2] lg:leading-[1] opacity-1 -translate-y-[0px]"
              onMouseEnter={() => dispatch(setCursorVarients("text"))}
              onMouseLeave={() => dispatch(setCursorVarients("default"))}
            >
              Smruti Ranjan Nayak
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute top-24 left-20 w-36 h-36 bg-accent-500 blur-[220px] md:blur-[180px]"></div>
      <div className="absolute bottom-14 right-20 w-32 h-32 bg-primary-500 blur-[160px] md:blur-[150px]"></div>
    </section>
  );
};

export default Hero;
