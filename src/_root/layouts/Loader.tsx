import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

const Loader = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<Array<HTMLParagraphElement | null>>([]);

  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(".SpanTag span", {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
      })
        .to("h1", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          onComplete: anime,
          ease: "power3.out",
        })
        .from("#text-wrapper", {
          opacity: 0,
        });
    },
    { scope: containerRef }
  );

  const anime = () => {
    titlesRef.current.forEach((title) => {
      if (title) {
        const splitTitle = new SplitType(title, { lineClass: "char" });
        tl.from(
          splitTitle.chars,
          {
            opacity: 0,
            y: 20,
            rotateX: -90,
            stagger: 0.02,
          },
          "<"
        ).to(
          splitTitle.chars,
          {
            opacity: 0,
            y: -20,
            rotateX: 90,
            stagger: 0.02,
          },
          "<1"
        );
      }
    });

    tl.to(
      "h1",
      {
        opacity: 0,
        y: -100,
        stagger: 0.3,
        duration: 0.5,
        ease: "power3.out",
      },
      "a"
    )
      .to(
        ".SpanTag span",
        {
          opacity: 0,
          scale: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        "a"
      )
      .to("#text-wrapper", {
        opacity: 0,
      })
      .to(
        "#mainContainer",
        {
          height: 0,
          duration: 1,
          ease: "power3.out",
        },
        "a+=.5"
      )
      .to(
        "#secondScreen",
        {
          height: "0dvh",
          ease: "power3.out",
          onComplete: () => setLoading(false),
        },
        "a+=1"
      );
  };

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   titlesRef.current.forEach((title) => {
  //     if (title) {
  //       const splitTitle = new SplitType(title, { lineClass: "char" });

  //       tl.from(
  //         splitTitle.chars,
  //         {
  //           opacity: 0,
  //           y: 20,
  //           rotateX: -90,
  //           stagger: 0.02,
  //         },
  //         "<"
  //       ).to(
  //         splitTitle.chars,
  //         {
  //           opacity: 0,
  //           y: -20,
  //           rotateX: 90,
  //           stagger: 0.02,
  //         },
  //         "<1"
  //       );
  //     }
  //   });
  // }, []);

  return (
    <div
      className="Loader w-full h-dvh bg-mainBlack-500 overflow-hidden relative"
      id="Loader"
      ref={containerRef}
    >
      <div
        id="mainContainer"
        className="w-full h-full grid place-content-center overflow-hidden absolute top-0 left-0 z-50 bg-mianBlack-500 text-white"
      >
        <div className="flex flex-col items-center" id="LoaderContent">
          <div className="w-full h-full overflow-hidden">
            <h1 className="font-secondary text-[4rem] md:text-[5rem] opacity-0 -translate-y-[100px]">
              SM8UTI
            </h1>
          </div>
          <div
            id="text-wrapper"
            className="font-primary-regular uppercase leading-[0] text-center w-full"
          >
            {["SM8UTI", "UI/UX Design", "Web Design", "Development"].map(
              (text, index) => (
                <p
                  key={index}
                  className="text-[.8rem] md:text-[1rem]  m-0 block font-primary-bold text-accent-500 text-center sm:tracking-[2px]"
                  ref={(el) => (titlesRef.current[index] = el)}
                >
                  {text}
                </p>
              )
            )}
          </div>
        </div>
        <div className="SpanTag absolute bottom-6 right-6 ">
          <span className="text-[.5rem] md:text-sm uppercase font-primary-bold opacity-0 scale-0">
            Loading...
          </span>
        </div>
        <div className="SpanTag absolute top-6 left-6">
          <span className="text-[.5rem] md:text-sm  uppercase font-primary-bold opacity-0 scale-0">
            PORTFOLIO @{new Date().getFullYear()}
          </span>
        </div>
        <div className="absolute top-24 left-20 w-36 h-36 bg-accent-500 blur-[220px] md:blur-[200px]"></div>
        <div className="absolute bottom-14 right-20 w-32 h-32 bg-accent-100 blur-[230px] md:blur-[200px]"></div>
      </div>
      <div id="secondScreen" className="bg-accent-500 w-full h-full"></div>
    </div>
  );
};

export default Loader;
