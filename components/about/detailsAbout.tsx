import scripts from "../../scripts.json";

import Image from "next/image";

import javascript from "../../public/assests/technology/javascript2.png";
import typescript from "../../public/assests/technology/typescript.png";
import react from "../../public/assests/technology/react2.png";
import nextjs from "../../public/assests/technology/nextjs.png";
import nodejs from "../../public/assests/technology/nodejs2.png";
import expo from "../../public/assests/technology/expo.png";
import mongdb from "../../public/assests/technology/mongdb2.png";
import firebase from "../../public/assests/technology/firebase.png";
import express from "../../public/assests/technology/express.png";
import tailwindcss from "../../public/assests/technology/tailwindcss.png";
import mui from "../../public/assests/technology/mui.png";
import mysql from "../../public/assests/technology/mysql.png";
import nativebase from "../../public/assests/technology/nativebase.png";
import php from "../../public/assests/technology/php.png";
import graphql from "../../public/assests/technology/graphql.png";
import figma from "../../public/assests/technology/figma.png";

const techStack = [
  { id: 10, name: "JavasScript" },
  { id: 16, name: "typescript" },
  { id: 20, name: "React" },
  { id: 30, name: "Next.js" },
  { id: 40, name: "Node.js" },
  { id: 50, name: "Expo" },
  { id: 60, name: "MongoDB" },
  { id: 70, name: "Firebase" },
  { id: 80, name: "Express" },
  { id: 90, name: "Tailwindcss" },
  { id: 100, name: "MaterialUI" },
  { id: 11, name: "MySQL" },
  { id: 12, name: "Nativebase" },
  { id: 13, name: "PHP" },
  { id: 14, name: "GraphQL" },
  { id: 15, name: "Figma" },
];

const DetailsAbout = () => {
  return (
    <div>
      <p className="pb-10">{scripts.aboutDescription}</p>
      <h1 className="text-5xl font-bold my-5">Technology Stack</h1>
      <div className="flex flex-wrap gap-4 pb-10">
        {techStack.map((techStacks) => (
          <div
            key={techStacks.id}
            className="h-28 w-28 bg-white rounded-md flex justify-center items-center transform hover:bg-zinc-400 transition duration-2000 ease-out cursor-pointer"
          >
            <Image
              alt="This is the technology stack images"
              src={
                techStacks.id === 10
                  ? javascript
                  : techStacks.id === 16
                  ? typescript
                  : techStacks.id === 20
                  ? react
                  : techStacks.id === 30
                  ? nextjs
                  : techStacks.id === 40
                  ? nodejs
                  : techStacks.id === 50
                  ? expo
                  : techStacks.id === 60
                  ? mongdb
                  : techStacks.id === 70
                  ? firebase
                  : techStacks.id === 80
                  ? express
                  : techStacks.id === 90
                  ? tailwindcss
                  : techStacks.id === 100
                  ? mui
                  : techStacks.id === 11
                  ? mysql
                  : techStacks.id === 12
                  ? nativebase
                  : techStacks.id === 13
                  ? php
                  : techStacks.id === 14
                  ? graphql
                  : figma
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsAbout;
