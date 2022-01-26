import { TheEvents, RoundImage, TheThinBorder } from "./events.styled";

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
      experience: "3 years of hands-on traning and deep understanding.",
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
        <h1 className="text-5xl md:text-8xl font-bold">Featured Tools Stack</h1>
        <div className="my-8">
          <div className="flex-col items-center">
            {tech.map((techs) => (
              <div className="flex my-4 mx-5 items-center" key={techs.id}>
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
                  width={100}
                  height={100}
                  alt="This is a featured tech images"
                />
                <div className="ml-4">
                  <p className="text-zinc-200 font-semibold">{techs.name}</p>
                  <p className="font-light text-zinc-400 w-80">
                    {techs.experience}
                  </p>
                  {techs.id === 10 ? (
                    <div className="bg-yellow-400 w-80 h-2 rounded-full my-2"></div>
                  ) : techs.id === 20 ? (
                    <div className="bg-sky-500 w-72 h-2 rounded-full my-2"></div>
                  ) : techs.id === 30 ? (
                    <div className="bg-green-400 w-56 h-2 rounded-full my-2"></div>
                  ) : techs.id === 40 ? (
                    <div className="bg-green-600 w-43 h-2 rounded-full my-2"></div>
                  ) : (
                    <div className="bg-red-500 w-72 h-2 rounded-full my-2"></div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <Link href="/views/about">
                <button className="bg-white text-black py-2 px-3 rounded-md transform hover:bg-zinc-400 transition duration-2000 ease-out">
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
