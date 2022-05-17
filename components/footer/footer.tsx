import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";

import { Typography, Alert } from "@mui/material";

import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";

import { TheFooter } from "./footer.styled";

import { fileStorage, storage } from "../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

import logo from "../../public/favicon.ico";

// @ts-ignore
const Footer = (props: { colorTheme; setColorTheme }) => {
  const externalLink = [
    { id: 10, name: "Twitter", icon: "Twitter" },
    { id: 20, name: "GitHub", icon: "GitHub" },
    { id: 30, name: "LinkedIn", icon: "LinkedIn" },
  ];

  const otherLink = {
    download: "Download CV",
    message: "Message Me",
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // MODAL
  const [modal, setModal] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setModal(true);
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

  const [urlD, setUrlD] = useState("");

  async function donwload() {
    const gsReference = ref(
      fileStorage,
      "gs://jovellabay-portfolio.appspot.com/Not Yet Available.pdf"
    );
    try {
      const url = await getDownloadURL(gsReference);
      setUrlD(url);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    donwload();
  }, []);

  return (
    <TheFooter>
      <div className="grid grid-cols-2 mx-4">
        <div className="flex flex-col items-start">
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
                className="text-lg md:text-xl py-3 transform hover:text-zinc-400 hover:scale-95 transition duration-2000 ease-out"
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
          <div className="text-lg md:text-xl flex flex-col items-start">
            <a className="py-3" href={urlD} target="_blank" download>
              {otherLink.download}
            </a>
            <button className="py-3" onClick={() => handleOpen()}>
              {otherLink.message}
            </button>
            <div className="border-2 py-1 px-1 rounded-lg">
              <button
                onClick={() => {
                  props.setColorTheme("mainContainer_Dark");
                  localStorage.setItem("theme", "mainContainer_Dark");
                }}
                className={
                  props.colorTheme === "mainContainer_Dark"
                    ? "bg-white text-black px-1 mx-1 rounded-md duration-1000"
                    : "px-1 mx-1 duration-1000"
                }
              >
                Dark
              </button>
              <button
                onClick={() => {
                  props.setColorTheme("mainContainer_Light");
                  localStorage.setItem("theme", "mainContainer_Light");
                }}
                className={
                  props.colorTheme === "mainContainer_Light"
                    ? "bg-black text-white px-1 mx-1 rounded-md duration-1000"
                    : "px-1 mx-1 duration-1000"
                }
              >
                Light
              </button>
            </div>
          </div>
        </div>
      </div>

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
              className={
                props.colorTheme === "mainContainer_Dark" ? "lightie" : "darkie"
              }
              initial={{ y: -550 }}
              animate={{ y: 50 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="flex justify-between py-2">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Send Message Directly here
                </Typography>{" "}
                <button onClick={() => setModal(!true)}>Close</button>
              </div>
              <>
                <p className="italic text-base">
                  <span className="text-red-700">Note: </span>There is a hidden
                  button in this website. Find it so you can play with it.{" "}
                  {
                    <span className="font-bold">
                      It's under 40% developemnt.
                    </span>
                  }
                </p>
                <form className="flex flex-col my-4" onSubmit={sendNow}>
                  <label className="font-bold text-base">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-zinc-200 py-3 px-3 rounded-md my-2 text-base"
                    value={name}
                    onChange={(text) => setName(text.target.value)}
                  />
                  <label className="font-bold text-base">Email Address*</label>
                  <input
                    required={true}
                    type="email"
                    placeholder="youremail@mail.com"
                    className="bg-zinc-200 py-3 px-3 rounded-md my-2 text-base"
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                  />
                  <label className="font-bold text-base">Message*</label>
                  <textarea
                    required={true}
                    rows={3}
                    placeholder="What's your message to me..."
                    className="bg-zinc-200 py-3 px-3 rounded-md my-2 lolo text-base"
                    value={message}
                    onChange={(text) => setMessage(text.target.value)}
                  />
                  <div>
                    {success === true ? (
                      <Alert severity="success">
                        Successfuly Message Sent. Wait to cooldown.
                      </Alert>
                    ) : (
                      <button
                        className={
                          props.colorTheme === "mainContainer_Light"
                            ? "border-2 rounded-md py-1 px-2 transition duration-2000 ease-out hover:bg-black hover:text-white hover:scale-110 focus:scale-100"
                            : "border-2 rounded-md py-1 px-2 transition duration-2000 ease-out hover:bg-white hover:text-black hover:scale-110 focus:scale-100"
                        }
                      >
                        {sendBtn}
                      </button>
                    )}
                  </div>
                </form>
              </>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TheFooter>
  );
};

export default Footer;
function axios(arg0: { url: string; method: string; responseType: string }) {
  throw new Error("Function not implemented.");
}
