import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";

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
  const contactRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-white">
      <Parallax pages={5} style={{ backgroundColor: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={2}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundRepeat: "repeat",
            opacity: 0.5,
          }}
        ></ParallaxLayer>

        <animated.div style={starProps}>
          <ParallaxLayer
            offset={0}
            speed={0.25}
            factor={1.5}
            style={{
              backgroundImage: `url(${stars})`,
              backgroundRepeat: "repeat",
              opacity: 1,
              transform: "rotate(90deg)",
            }}
          ></ParallaxLayer>
        </animated.div>

        <ParallaxLayer offset={0.75} speed={1}>
          <div className="text-white flex-col ml-32 mr-32 bg-black">
            <div className="flex items-end justify-between mb-5">
              <div className="flex justify-around items-end w-2/5">
                <h1 className="text-8xl font-mono">Berry</h1>
                <h4>DIGITAL</h4>
              </div>

              <div className="flex justify-around w-2/5 italic">
                <a
                  onClick={() =>
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About
                </a>
                <a
                  onClick={() =>
                    contactRef.current?.scrollIntoView({ behavior: "smooth" })
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
                </a>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <div ref={aboutRef} className="ml-32">
            <p>
              Christopher Berry is an independent developer with a passion for
              the mitigation of suffering
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <div ref={contactRef} className="ml-32">
            <Contact />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4}>
          <div ref={blogRef} className="ml-32">
            <h1>BLOG</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
      <Footer />
    </div>
  );
}
