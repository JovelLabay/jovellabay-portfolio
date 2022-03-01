import { Border } from "./about.styled";

import Image from "next/image";

import liceo from "../../public/assests/school/liceo.png";
import tesda from "../../public/assests/school/tesda.png";
import xu from "../../public/assests/school/xavier.png";

const EducationAbout = () => {
  const school = [
    {
      id: 100,
      name: "Xavier University - Ateneo de Cagayan",
      program: "Bachelor of Science in Information Technology",
      SY: "2018 - 2023",
    },
    {
      id: 200,
      name: "Liceo de Cagayan University",
      program: "Information and Communication Technology",
      SY: "2016 - 2018",
    },
    {
      id: 300,
      name: "Crossroads Training Institute",
      program: "NCII - Computer Servicing System",
      SY: "2 Months of Training",
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold my-5">Education</h1>
      {school.map((schools) => (
        <div className="mb-10" key={schools.id}>
          <div className="flex items-center">
            <div className="mx-2 bg-white h-20 w-20 flex items-center justify-center rounded-md">
              <Image
                src={
                  schools.id === 100 ? xu : schools.id === 200 ? liceo : tesda
                }
                width={70}
                height={70}
                alt="These are the logos of the educational institution"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{schools.name}</h1>
              <p>{schools.id === 300 ? "TESDA" : ""}</p>
              <p className="text-zinc-400">{schools.program}</p>
              <p className="font-light text-zinc-400">{schools.SY}</p>
            </div>
          </div>
          {schools.id != 300 ? <Border /> : ""}
        </div>
      ))}
    </div>
  );
};

export default EducationAbout;
