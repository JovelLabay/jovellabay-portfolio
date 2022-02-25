import Link from "next/link";

import React, { useState } from "react";

import {
  ArrowRightRounded,
  Facebook,
  Email,
  Instagram,
} from "@mui/icons-material";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { TheAbout } from "./about.styled";

import DetailsAbout from "./detailsAbout";
import EducationAbout from "./educationAbout";
import CertAbout from "./certAbout";

const AboutSelf = () => {
  const meta: any = {
    title: "Jovel Labay | About",
    description:
      "A web and mobile developer based in Cagayan de Oro, Philippines",
    name: "Jovel Labay",
    image: "",
    type: "website",
  };

  const left = [
    {
      id: 10,
      name: "Contact",
      description:
        "For project inquiries or if you need some sort of programming tips on related technologies. Feel free to send me a message on your preferred platforms.",
    },
    {
      id: 20,
      name: "If you're interested to let me speak at your event?",
      description:
        "My specializations are in Web development, Mobile development, UI and UX designing, hardware and software troubleshooting, and other related emerging technologies.",
    },
    {
      id: 30,
      name: "Want to hire me as a freelancer?",
      description:
        "You can freely set a schedule here. So, we can talk about what you need for your project.",
    },
    {
      id: 40,
      name: "Social Links",
    },
  ];

  const socialLink = [
    { id: 100, name: "Facebook" },
    { id: 200, name: "Instagram" },
    { id: 300, name: "Tiktok" },
    { id: 400, name: "Twitter" },
  ];

  const message = [
    { id: 1, name: "Facebook" },
    { id: 2, name: "Instagram" },
    { id: 3, name: "Gmail" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <TheAbout>
      <div className="mx-4">
        <h1 className="text-5xl md:text-8xl font-bold ">About</h1>
        <h3 className="pt-4 pb-14 text-zinc-400">{meta.description}</h3>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/3 md:mr-10 ">
            {left.map((lefts) => (
              <div className="py-4" key={lefts.id}>
                <h1 className="font-bold py-2">{lefts.name}</h1>
                <h3 className="font-light text-zinc-400">
                  {lefts.description}{" "}
                  {lefts.id === 10 ? (
                    <Link href="">
                      <a
                        className="font-normal text-white transform hover:text-zinc-400 transition duration-2000 ease-out"
                        onClick={() => setOpen(true)}
                      >
                        Contact me.
                      </a>
                    </Link>
                  ) : lefts.id === 30 ? (
                    <Link href="">
                      <a
                        className="font-normal text-white transform hover:text-zinc-400 transition duration-2000 ease-out"
                        onClick={() => {
                          window.open(
                            "https://calendly.com/jovellabay",
                            "",
                            "width=500,height=700"
                          );
                        }}
                      >
                        Schedule it here.
                      </a>
                    </Link>
                  ) : lefts.id === 40 ? (
                    <div className="flex flex-col">
                      {socialLink.map((socialLinks) => (
                        <Link
                          key={socialLinks.id}
                          href={
                            socialLinks.id === 100
                              ? "https://www.facebook.com/jovel.labay/"
                              : socialLinks.id === 200
                              ? "https://www.instagram.com/dodonglabs/"
                              : socialLinks.id === 300
                              ? "downloads"
                              : "https://twitter.com/dodonglabs"
                          }
                        >
                          <a
                            className="py-2 pl-2 transform hover:text-white hover:scale-90 transition duration-2000 ease-out"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowRightRounded sx={{ fontSize: 40 }} />
                            {socialLinks.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
            ))}
          </div>
          <div className="md:ml-10 py-4 md:w-3/5">
            <DetailsAbout />
            <EducationAbout />
            <CertAbout />
          </div>
        </div>
      </div>

      {/* DIALOG MESSAGE ALERT */}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Choose preferred platforms
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="flex flex-col"
          >
            {message.map((messages) => (
              <a
                key={messages.id}
                target="_blank"
                rel="noopener noreferrer"
                href={
                  messages.id === 1
                    ? "http://www.m.me/jovel.labay/"
                    : messages.id === 2
                    ? "https://www.instagram.com/dodonglabs/"
                    : "mailto:jovellabay@gmail.com"
                }
                className="my-1 py-2 flex justify-start hover:bg-zinc-100 rounded-md"
              >
                {messages.id === 1 ? (
                  <Facebook className="mx-2" />
                ) : messages.id === 2 ? (
                  <Instagram className="mx-2" />
                ) : (
                  <Email className="mx-2" />
                )}

                {messages.name}
              </a>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </TheAbout>
  );
};

export default AboutSelf;
