import { TheProjects } from "./projects.styled";

import Image from "next/image";

import api from "../../../public/assests/images/api.png";
import jotdown from "../../../public/assests/images/jotdown.png";
import humors from "../../../public/assests/images/humors.png";
import axie from "../../../public/assests/images/axie.png";
import papahanta from "../../../public/assests/images/papahanta.png";
import noImage from "../../../public/assests/notFound/ext.jpg";

import { featuredProject2 } from "../../../modules/modules";

const Projects = () => {
  return (
    <TheProjects>
      <div className="mx-4">
        <h1 className="text-5xl md:text-8xl font-bold">Featured Projects</h1>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {featuredProject2.map((featuredProjects) => (
            <div
              key={featuredProjects.id}
              className="h-auto bg-gradient-to-tl from-gray-800 to-black rounded-md relative my-5 md:my-0"
            >
              <Image
                src={
                  featuredProjects.id === 10
                    ? api
                    : featuredProjects.id === 20
                    ? jotdown
                    : featuredProjects.id === 30
                    ? humors
                    : featuredProjects.id === 40
                    ? axie
                    : featuredProjects.id === 50
                    ? papahanta
                    : noImage
                }
                alt="This is a feature project images"
                className="bg-cover transform hover:scale-125 transition duration-1000 ease-out hover:rotate-6 cursor-pointer"
              />
              <h1 className="bg-white rounded-sm text-black absolute top-5 left-5 py-1 px-3">
                {featuredProjects.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </TheProjects>
  );
};

export default Projects;
