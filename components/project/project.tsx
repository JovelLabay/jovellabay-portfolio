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

const Project = (props: { colorTheme: string }) => {
  const featuredProject = [
    {
      name: "Orderit | Mobile Application",
      theURL: "orderit_mobile_application",
      uid: 1,
    },
    {
      name: "Static page | EJS & Handlebars",
      theURL: "rest_api",
      uid: 14,
    },
    {
      name: "Twitter Clone | Web Application",
      theURL: "twitter_clone_web_application",
      uid: 2,
    },
    { name: "Library API", theURL: "library_api", uid: 3 },
    {
      name: "Blogs Web Application",
      theURL: "blogs_web_application",
      uid: 4,
    },
    {
      name: "Stand-alone Auto Reply Messaging Integration",
      theURL: "standalone_auto_reply_messaging_integration",
      uid: 5,
    },
    {
      name: "Humors | iOS Application",
      theURL: "humors_ios_application",
      uid: 6,
    },
    {
      name: "Axie Infinity Wallets",
      theURL: "https://skymavisdataverify.com/",
      uid: 14,
    },
    {
      name: "E-commerce Web Application",
      theURL: "ecommerce_web_application",
      uid: 7,
    },
    { name: "Joke API", theURL: "joke_api", uid: 8 },
    {
      name: "MERN Stack",
      theURL: "mern_stack",
      uid: 9,
    },
    {
      name: "Jotdown | Mobile Application",
      theURL: "jotdown_mobile_application",
      uid: 10,
    },
    {
      name: "Weather Integration and API",
      theURL: "weather_integration_and_api",
      uid: 11,
    },
    {
      name: "Ecommerce API",
      theURL: "e_commerce_api",
      uid: 12,
    },
    {
      name: "REST API",
      theURL: "rest_api",
      uid: 13,
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
            // <div onClick={() => setOpen(true)} key={index} className="projects">
            <div key={index} onClick={() => setOpen(true)}>
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
              sx={{
                backgroundColor:
                  props.colorTheme === "mainContainer_Light"
                    ? "black"
                    : "white",
                height: 60,
              }}
              className="my-2"
            />
            <Skeleton
              variant="text"
              sx={{
                backgroundColor:
                  props.colorTheme === "mainContainer_Light"
                    ? "black"
                    : "white",
                height: 40,
              }}
              className="my-2"
            />
            <Skeleton
              variant="text"
              sx={{
                backgroundColor:
                  props.colorTheme === "mainContainer_Light"
                    ? "black"
                    : "white",
                height: 20,
              }}
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
