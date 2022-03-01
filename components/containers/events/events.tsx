import { TheEvents, RoundImage } from "./events.styled";
import { motion } from "framer-motion";

import Link from "next/link";

import javascript from "../../../public/assests/technology/javascript2.png";
import react from "../../../public/assests/technology/react2.png";
import nodejs from "../../../public/assests/technology/nodejs2.png";
import mongdb from "../../../public/assests/technology/mongdb2.png";
import figma from "../../../public/assests/technology/figma.png";

const Events = () => {
  const tech = [
    {
      id: 10,
      name: "JavaScript",
      experience: "5 years of vanilla Javascript with ES6.",
    },
    {
      id: 20,
      name: "React",
      experience: "3 years of training from online courses.",
    },
    {
      id: 30,
      name: "Node.JS",
      experience: "3 years of hands-on training and deep understanding.",
    },
    {
      id: 40,
      name: "MongoDB",
      experience: "2 years of experience on NoSQL databases.",
    },
    {
      id: 50,
      name: "Figma",
      experience: "3 years of practicing UI and UX designing.",
    },
  ];

  return (
    <TheEvents>
      <div className="mx-4">
        <h1 className="text-5xl md:text-8xl font-bold">Featured Techs</h1>
        <div className="my-8">
          <div className="flex-col items-center">
            {tech.map((techs) => (
              <div className="flex my-4 mx-5 items-center" key={techs.id}>
                <motion.div
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 0.8, 0.7, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "circIn",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <RoundImage
                    src={
                      techs.id === 10
                        ? javascript
                        : techs.id === 20
                        ? react
                        : techs.id === 30
                        ? nodejs
                        : techs.id === 40
                        ? mongdb
                        : figma
                    }
                    className="transition duration-1000 ease-out hover:rotate-90"
                    width={80}
                    height={80}
                    alt="This is a featured tech images"
                  />
                </motion.div>
                <div className="ml-4">
                  <p className="text-zinc-200 font-semibold text-lg">
                    {techs.name}
                  </p>
                  <p className="font-light text-zinc-400 w-80 text-base">
                    {techs.experience}
                  </p>
                  {techs.id === 10 ? (
                    <div className="featuredTechStack bg-yellow-400 w-52 h-2" />
                  ) : techs.id === 20 ? (
                    <div className="featuredTechStack bg-sky-500 w-48 h-2" />
                  ) : techs.id === 30 ? (
                    <div className="featuredTechStack bg-green-400 w-44 h-2" />
                  ) : techs.id === 40 ? (
                    <div className="featuredTechStack bg-green-600 w-40 h-2" />
                  ) : (
                    <div className="featuredTechStack bg-red-500 w-52 h-2 r" />
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <Link href="/views/about">
                <button className="border-2 rounded-md py-1 px-2 transition duration-2000 ease-out hover:bg-white hover:text-black hover:scale-110 focus:scale-100">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </TheEvents>
  );
};

export default Events;
