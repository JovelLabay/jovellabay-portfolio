import { TheProject } from "./project.styled";

import React from "react";
import Image from "next/image";

import { Skeleton, Box } from "@mui/material";

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
import Link from "next/link";

const Project = () => {
  const featuredProject = [
    {
      name: "Orderit | Mobile Application",
      theURL: "orderit_mobile_application",
    },
    {
      name: "Twitter Clone | Web Application",
      theURL: "twitter_clone_web_application",
    },
    { name: "Library API", theURL: "library_api" },
    { name: "Blogs Web Application", theURL: "blogs_web_application" },
    {
      name: "Stand-alone Auto Reply Messaging Integration",
      theURL: "standalone_auto_reply_messaging_integration",
    },
    { name: "Humors | iOS Application", theURL: "humors_ios_application" },
    { name: "E-commerce Web Application", theURL: "ecommerce_web_application" },
    { name: "Joke API", theURL: "joke_api" },
    {
      name: "Jotdown | Mobile Application",
      theURL: "jotdown_mobile_application",
    },
    {
      name: "Weather Integration and API",
      theURL: "weather_integration_and_api",
    },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <TheProject>
      <div className=" mx-4">
        <h1 className="text-5xl md:text-8xl font-bold pb-3">Projects</h1>
        <h3 className="pt-4 pb-14 text-zinc-400 indent-10">
          {scripts.projects}
        </h3>
        <div className="">
          {featuredProject.map((featuredProjects, index) => (
            <div onClick={() => setOpen(true)} key={index} className="projects">
              {/* <Link
              href={`/views/project/${featuredProjects.theURL}`}
              key={index}
            > */}
              <div className="projects">
                <h1 className="text-white mx-5">{featuredProjects.name}</h1>
                <h1 className="text-white mx-5">{index}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="my-14">
          <h1 className="text-5xl font-bold my-5">Experience</h1>
          <Box sx={{ width: "auto" }}>
            <p className="font-light text-zinc-400">Come back soon.</p>

            <Skeleton
              variant="text"
              sx={{ backgroundColor: "white", height: 60 }}
              className="my-2"
            />
            <Skeleton
              variant="text"
              sx={{ backgroundColor: "white", height: 40 }}
              className="my-2"
            />
            <Skeleton
              variant="text"
              sx={{ backgroundColor: "white", height: 20 }}
              className="my-2"
            />
          </Box>
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
            check the codebase in my github repository.
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
