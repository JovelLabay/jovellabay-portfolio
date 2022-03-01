import Link from "next/link";

import { TheHome, RoundImage } from "./introduction.styled";

import scripts from "../../../scripts.json";

import jovellabay from "../../../public/assests/images/jovellabay.jpg";

const Introduction = () => {
  return (
    <TheHome>
      <div className="md:flex mx-4 justify-between">
        <div className="md:mr-10">
          <RoundImage
            src={jovellabay}
            alt="This is the main profile image"
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold py-4">{scripts.titleName}</h1>
          <h3 className="py-4">
            {scripts.titleField} {"💻📱"}
          </h3>
          <p className="font-light text-zinc-400 indent-10">
            {scripts.titleDescription}{" "}
            <Link href="/views/about">
              <a className="font-normal text-white hover:text-zinc-400 transform transition duration-2000 ease-out">
                Learn more.
              </a>
            </Link>
          </p>
        </div>
      </div>
    </TheHome>
  );
};

export default Introduction;
