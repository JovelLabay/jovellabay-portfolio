import { TheProject } from "./project.styled";

import React from "react";
import Image from "next/image";

import scripts from "../../scripts.json";
import mama from "../../public/assests/notFound/ext.jpg";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Project = () => {
  const featuredProject = [
    { name: "Orderit | Mobile Application" },
    { name: "Twitter Clone | Web Application" },
    { name: "Library API" },
    { name: "Blogs Web Application" },
    { name: "Stand-alone Auto Reply Messaging Integration" },
    { name: "Humors | iOS Application" },
    { name: "E-commerce Web Application" },
    { name: "Joke API" },
    { name: "Jotdown | Mobile Application" },
    { name: "Weather Integration and API" },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <TheProject>
      <div className=" mx-4">
        <h1 className="text-5xl md:text-8xl font-bold ">Projects</h1>
        <h3 className="pt-4 pb-14 text-zinc-400">{scripts.projects}</h3>
        <div className="">
          {featuredProject.map((featuredProjects, index) => (
            <div onClick={() => setOpen(true)} key={index} className="projects">
              <h1 className="text-white mx-5">{featuredProjects.name}</h1>
              <h1 className="text-white mx-5">{index}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* DIALOG ALERT */}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">403 Forbidden</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Preview on the project is not yet open for public. However, you can
            check the codebase on my github repository.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Come back soon
          </Button>
        </DialogActions>
      </Dialog>
    </TheProject>
  );
};

export default Project;
