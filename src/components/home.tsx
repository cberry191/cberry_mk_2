import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { GiBonsaiTree } from "react-icons/gi";
import { MdDoubleArrow } from "react-icons/md";
import stars from "../assets/images/Stars.png";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  const starProps = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 0 },
    loop: { reverse: true },
    config: { duration: 5000 },
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-white">
      <Parallax pages={3} style={{ backgroundColor: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.5}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundRepeat: "repeat",
            opacity: 0.25,
          }}
        ></ParallaxLayer>

        <animated.div style={starProps}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `url(${stars})`,
              backgroundRepeat: "repeat",
              opacity: 1,
              transform: "rotate(180deg)",
            }}
          ></ParallaxLayer>
        </animated.div>

        <ParallaxLayer offset={0.6} speed={1}>
          <div className="flex flex-col align-middle items-center">
            <div className="text-white bg-black felx align-middle w-full">
              <div className="flex items-end justify-between mb-5">
                <div className="flex justify-around items-end w-2/5">
                  <h1 className="text-8xl font-mono">Berry</h1>
                  <h4 className="italic">DIGITAL</h4>
                </div>

                <div className="flex justify-around w-2/5 italic mb-6 items-center">
                  <GiBonsaiTree size={50} />
                  {/* <a
                  onClick={() =>
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About
                </a>
                <a
                  onClick={() =>
                    detailsRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact
                </a>
                <a
                  onClick={() =>
                    blogRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Blog
                </a> */}
                </div>
              </div>
            </div>
            <MdDoubleArrow
              size={50}
              style={{ transform: "rotate(90deg)" }}
              className="mt-20 animate-pulse"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <div className="flex justify-center">
            <div className="w-1/3 flex flex-col p-6" ref={aboutRef}>
              <p>
                I'm Christopher Berry, an independent developer with a passion
                for helping people and businesses make better use of their time.
              </p>
              <p className="mt-8">Whether you need:</p>
              <ul className="ml-4 mt-4 mb-4">
                <li>An app or website</li>
                <li>Help understanding your data</li>
                <li>Your message communicated</li>
              </ul>
              <p>I can help you.</p>
              <p className="mt-6 justify-self-center italic">
                Get in touch with me today!
              </p>
            </div>
            <Contact />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.8}>
          <div ref={detailsRef}>
            <div className="flex flex-col justify-center items-center">
              <h1>WEBSITE POWERED BY</h1>
              <div className="flex w-3/5 justify-around">
                <FaReact size={75} />
                <SiTailwindcss size={75} />
                <SiFirebase size={75} />
              </div>
              <p className="text-8xl mt-44 italic">BLOG COMING SOON</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.75}>
          <div ref={blogRef} className="pl-40">
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
