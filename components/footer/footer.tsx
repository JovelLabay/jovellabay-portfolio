import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";

import { Modal, Box, Typography, Alert } from "@mui/material";

import {
  ArrowRightRounded,
  ArrowDropUpRounded,
  LinkedIn,
  Twitter,
  GitHub,
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";

import { TheFooter } from "./footer.styled";

import { storage } from "../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";

import logo from "../../public/favicon.ico";

const Footer = () => {
  const externalLink = [
    { id: 10, name: "Twitter", icon: "Twitter" },
    { id: 20, name: "GitHub", icon: "GitHub" },
    { id: 30, name: "LinkedIn", icon: "LinkedIn" },
  ];

  const otherLink = [
    { id: 10, name: "Download CV" },
    { id: 20, name: "Send Message" },
  ];

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // MODAL
  const [modal, setModal] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // setOpen(true);
    setModal(true);
  };

  const style = {
    // position: "absolute" as "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // bgcolor: "white",
    // boxShadow: 24,
    // p: 4,
    borderRadius: 5,
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendBtn, setSendBtn] = useState("Send");

  const [success, setSuccess] = useState(false);

  const sendMe = async () => {
    setSendBtn("Sending...");
    const data1: string = name;
    const data2: string = email;
    const data3: string = message;
    try {
      await addDoc(collection(storage, data1), {
        data1,
        data2,
        data3,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(!true);
        setSendBtn("Send");
      }, 5000);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const sendNow = (e: any) => {
    e.preventDefault();
    sendMe();
    setName("");
    setEmail("");
    setMessage("");
  };

  const myDate: Date = new Date();
  const space: any = " ";

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
                className="py-3 transform hover:text-zinc-400 hover:scale-95 transition duration-2000 ease-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                {externalLinks.id === 10 ? (
                  <Twitter sx={{ fontSize: 25 }} />
                ) : externalLinks.id === 20 ? (
                  <GitHub sx={{ fontSize: 25 }} />
                ) : (
                  <LinkedIn sx={{ fontSize: 25 }} />
                )}{" "}
                {externalLinks.name}
              </a>
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-col">
            {otherLink.map((otherLinks) => (
              <button
                className="py-3"
                onClick={otherLinks.id === 20 ? () => handleOpen() : undefined}
              >
                {otherLinks.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex transform hover:scale-75 transition duration-2000 justify-center">
        <ArrowDropUpRounded
          sx={{ fontSize: 50, color: "black" }}
          onClick={scrollUp}
          className="bg-white rounded-full cursor-pointer"
        />
      </div> */}

      {/* FOR YEAR */}
      <div className="flex flex-row my-3 mx-4 items-center">
        <Image src={logo} alt="webLogo" height={20} width={20} />
        <p className="text-zinc-400 mx-2 font-thin text-base">
          {"© "}
          {myDate.getFullYear()}{" "}
        </p>
        <p className="text-zinc-400 font-thin text-base">
          {"Jovellabay. All rights reserved"}
        </p>
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
          <p className="italic">
            <span className="text-red-700">Note: </span>There is a hidden button
            in this website. Find it so you can play with it.{" "}
            {<span className="font-bold">It's under 40% developemnt.</span>}
          </p>
          <form className="flex flex-col my-4" onSubmit={sendNow}>
            <label className="font-bold text-lg">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="bg-zinc-200 py-3 px-3 rounded-md my-2"
              value={name}
              onChange={(text) => setName(text.target.value)}
            />
            <label className="font-bold text-lg">Email Address*</label>
            <input
              required={true}
              type="email"
              placeholder="youremail@mail.com"
              className="bg-zinc-200 py-3 px-3 rounded-md my-2"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <label className="font-bold text-lg">Message*</label>
            <textarea
              required={true}
              rows={3}
              placeholder="What's your message to me..."
              className="bg-zinc-200 py-3 px-3 rounded-md my-2 lolo"
              value={message}
              onChange={(text) => setMessage(text.target.value)}
            />
            <div>
              {success === true ? (
                <Alert severity="success">
                  Successfuly Message Sent. Wait to cooldown.
                </Alert>
              ) : (
                <button className="border-2 border-black rounded-md py-1 px-2 transition duration-2000 ease-out hover:bg-black hover:text-white hover:scale-110 focus:scale-100">
                  {sendBtn}
                </button>
              )}
            </div>
          </form>
        </Box>
      </Modal>

      {/* MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="theModal"
              initial={{ y: -250 }}
              animate={{ y: 100 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <h1>hello</h1>
              <button onClick={() => setModal(!true)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TheFooter>
  );
};

export default Footer;
