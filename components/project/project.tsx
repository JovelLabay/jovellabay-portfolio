import { TheProject } from "./project.styled";

import scripts from "../../scripts.json";

const Project = () => {
  return (
    <TheProject>
      <div className="h-full mx-4">
        <h1 className="text-5xl md:text-8xl font-bold ">Projects</h1>
        <h3 className="pt-4 pb-14 text-zinc-400">{scripts.projects}</h3>
        <div>
          <p>Under development ...</p>
        </div>
      </div>
    </TheProject>
  );
};

export default Project;
