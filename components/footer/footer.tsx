import Link from "next/link";

import React, { useState } from "react";

import { Modal, Box, Typography } from "@mui/material";

import { ArrowRightRounded, ArrowDropUpRounded } from "@mui/icons-material";

import { TheFooter } from "./footer.styled";
import { borderRadius } from "@mui/system";

const Footer = () => {
  const externalLink = [
    { id: 10, name: "Twitter", icon: "Twitter" },
    { id: 20, name: "GitHub", icon: "GitHub" },
    { id: 30, name: "LinkedIn", icon: "LinkedIn" },
  ];

  const otherLink = [
    { id: 10, name: "Download" },
    { id: 20, name: "Send Message" },
  ];

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <TheFooter>
      <div className="grid grid-cols-2 mx-4">
        <div className="flex flex-col">
          {externalLink.map((externalLinks) => (
            <Link
              href={
                externalLinks.id === 10
                  ? "https://twitter.com/dodonglabs"
                  : externalLinks.id === 20
                  ? "https://github.com/JovelLabay"
                  : "downloads"
              }
              key={externalLinks.id}
            >
              <a
                className="py-3 transform hover:text-zinc-400 transition duration-2000 ease-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRightRounded sx={{ fontSize: 20 }} />
                {externalLinks.name}
              </a>
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-col">
            {otherLink.map((otherLinks) => (
              <Link
                href={otherLinks.id === 10 ? "downloads" : ""}
                key={otherLinks.id}
              >
                <a
                  className="py-3"
                  onClick={() => {
                    otherLinks.id === 20 ? handleOpen() : "";
                  }}
                >
                  {otherLinks.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        <ArrowDropUpRounded
          sx={{ fontSize: 50, color: "black" }}
          onClick={scrollUp}
          className="bg-white rounded-full cursor-pointer"
        />
      </div>

      {/* MODAL FOR DIRECT EMAIL */}
      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Send Message Directly here
          </Typography>
          <form className="flex flex-col my-4">
            <label className="font-bold text-lg">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="bg-zinc-200 py-3 px-3 rounded-md my-2"
            />
            <label className="font-bold text-lg">Email Address*</label>
            <input
              required={true}
              type="email"
              placeholder="youremail@mail.com"
              className="bg-zinc-200 py-3 px-3 rounded-md my-2"
            />
            <label className="font-bold text-lg">Message*</label>
            <textarea
              required={true}
              rows={5}
              placeholder="What's your message to me..."
              className="bg-zinc-200 py-3 px-3 rounded-md my-2"
            />

            <button
              className="bg-black text-white py-2 px-3 rounded-full my-2"
              disabled
            >
              Send
            </button>
          </form>
        </Box>
      </Modal>
    </TheFooter>
  );
};

export default Footer;
