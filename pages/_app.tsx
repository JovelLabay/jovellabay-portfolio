import type { AppProps } from "next/app";

import { ArrowDropUpRounded, Message, Send } from "@mui/icons-material";
import Switch from "@mui/material/Switch";
import { makeStyles } from "@mui/styles";
import "../styles/globals.css";
import "./../styles/scroll.css";

import Layout from "../layout/layout";
import React from "react";

import Chat from "../components/chat/chat";

// SAMPLE
const useStyles = makeStyles({
  root: {
    borderWidth: 2.5,
    borderColor: "black",
    color: "black",
    padding: 2,
    margin: 5,
    borderRadius: 5,
  },
});

const useStyles2 = makeStyles({
  root: {
    boxShadow: "0 0 4px 0 gray",
    display: "flex",
    justifyContent: "space-between",
  },
});
const useStyles3 = makeStyles({
  root: {
    borderWidth: 2.5,
    borderColor: "pink",
    color: "white",
    background: "pink",
    padding: 2,
    margin: 5,
    borderRadius: 50,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // SCROLL TOP
  const [hide, setHide] = React.useState(false);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  // CUSTOM STYLES MIU
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  // MESSAGE
  const [message, setMassage] = React.useState(false);
  function toggleMessageOpen() {
    setMassage(true);
  }
  function toggleMessageClose() {
    setMassage(!true);
  }

  // COLOR THEME
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "mainContainer_Light");
  }

  const theThemeColor = localStorage.getItem("theme");

  const [colorTheme, setColorTheme] = React.useState(theThemeColor);

  return (
    <div className={colorTheme === null ? "mainContainer_Light" : colorTheme}>
      <button className="hidded" onClick={toggleMessageOpen}>
        Message
      </button>
      <div className="container">
        {/* THE MAIN CONTENT */}
        <Layout colorTheme={colorTheme} setColorTheme={setColorTheme}>
          <Component {...pageProps} />
        </Layout>
      </div>
      {/* RIGHT BOTTOM BTN FOR CHAT AND SCROLL UP */}
      <div className=" fixed right-10 bottom-10 ">
        {message === true ? (
          <div className="w-80 bg-white min-h-40 rounded-lg">
            {/* MODAL CLOSE BTN */}
            <div className={classes2.root}>
              <button className={classes.root} onClick={toggleMessageClose}>
                Close
              </button>
              <p className={classes3.root}>Beta</p>
            </div>
            {/* MODAL CONTENT */}
            <Chat />
          </div>
        ) : null}
        {/* SCROLL UP BTN */}
        {hide && (
          <button
            className="bg-white p-1 rounded-full cursor-pointer transform hover:scale-75 transition duration-2000"
            onClick={scrollUp}
          >
            {<ArrowDropUpRounded sx={{ fontSize: 50, color: "black" }} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default MyApp;
