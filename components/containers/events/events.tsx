import { TheEvents, RoundImage } from "./events.styled";
import { motion } from "framer-motion";

import Link from "next/link";

import javascript from "../../../public/assests/technology/javascript2.png";
import react from "../../../public/assests/technology/react2.png";
import nodejs from "../../../public/assests/technology/nodejs2.png";
import mongdb from "../../../public/assests/technology/mongdb2.png";
import figma from "../../../public/assests/technology/expo.png";

const Events = (props: { colorTheme: string }) => {
  const tech = [
    {
      id: 10,
      name: "JavaScript",
      experience: "4 years of vanilla Javascript with ES6.",
    },
    {
      id: 20,
      name: "React",
      experience: "3 years of training from online courses.",
    },
    {
      id: 30,
      name: "NodeJS",
      experience: "3 years of hands-on training and deep understanding.",
    },
    {
      id: 40,
      name: "MongoDB",
      experience: "2 years of experience on NoSQL databases.",
    },
    {
      id: 50,
      name: "Expo CLI",
      experience: "2 years of experience in cross-platform development..",
    },
  ];

  return (
    <TheEvents>
      <div className="mx-4">
        <h1 className="text-5xl md:text-8xl font-bold">Featured Techs</h1>
        <div className="my-8">
          <div className="flex-col items-center">
            {tech.map((techs) => (
              <div
                className="flex my-4 mx-0 sm:mx-5 items-center"
                key={techs.id}
              >
                <motion.div
                  className="hidden sm:block"
                  animate={{
                    // rotate: [0, 90, 180, 270, 360],
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
                    className="transition duration-1000 ease-out hover:rotate-180"
                    width={80}
                    height={80}
                    alt="This is a featured tech images"
                  />
                </motion.div>
                <div className="ml-0 sm:ml-4">
                  <p className="font-semibold text-lg">{techs.name}</p>
                  <p className="font-light text-zinc-400 w-80 text-base ">
                    {techs.experience}
                  </p>
                  {techs.id === 10 ? (
                    <div className="featuredTechStack bg-gray-400 w-full h-2 flex items-center">
                      <div className="featuredTechStack bg-yellow-400 w-72  h-2" />
                    </div>
                  ) : techs.id === 20 ? (
                    <div className="featuredTechStack bg-gray-400 w-full h-2 flex items-center">
                      <div className="featuredTechStack bg-sky-500 w-60 h-2" />
                    </div>
                  ) : techs.id === 30 ? (
                    <div className="featuredTechStack bg-gray-400 w-full h-2 flex items-center">
                      <div className="featuredTechStack bg-green-600 w-52 h-2" />
                    </div>
                  ) : techs.id === 40 ? (
                    <div className="featuredTechStack bg-gray-400 w-full h-2 flex items-center">
                      <div className="featuredTechStack bg-green-400 w-44 h-2" />
                    </div>
                  ) : (
                    <div className="featuredTechStack bg-gray-400 w-full h-2 flex items-center">
                      <div className="featuredTechStack bg-red-500 w-44 h-2 r" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <Link href="/views/about">
                <button
                  className={
                    props.colorTheme === "mainContainer_Light"
                      ? "border-2 rounded-md py-1 px-2 transition duration-2000 ease-out hover:bg-black hover:text-white hover:scale-110 focus:scale-100"
                      : "border-2 rounded-md py-1 px-2 transition duration-2000 ease-out hover:bg-white hover:text-black hover:scale-110 focus:scale-100"
                  }
                >
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
