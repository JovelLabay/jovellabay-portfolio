import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Google } from "@mui/icons-material";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { googleAuth, storage } from "../../firebase/firebase.config";
import Communicate from "./communicate";

export default function Chat() {
  // CUSTOM STYLES MIU
  const useStyles = makeStyles({
    root: {
      background: "#3F7EE8",
      border: 0,
      borderRadius: 3,
      color: "white",
      marginRight: "10px",
      marginTop: "10px",
      padding: "4px 10px",
    },
  });
  const classes = useStyles();

  // USER STATUS
  // const [name, setName] = React.useState<null | string>();
  // const [email, setEmail] = React.useState<null | string>();
  const theUser = localStorage.getItem("user");

  // LOGIN AND SIGNIN WITH GOOGLE ONLY
  const logSignMe = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(googleAuth, provider)
      .then((res) => {
        const { displayName, email } = res.user;
        if (typeof displayName === "string") {
          localStorage.setItem("user", displayName);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // FOR THE DATE
  const myDate = new Date();
  const time = myDate.toLocaleTimeString();

  // DATA TO BE SENT TO COMMUNICATION FUNCTIONAL COMPONENT
  const [animal, setAnimal] = useState<string[]>([]);

  const resEmail = () => {
    setAnimal((animal) => [...animal, `dev@dev.com ${time}`]);
    localStorage.setItem("messages", JSON.stringify(animal));
  };
  const resSocial = () => {
    setAnimal((animal) => [...animal, "socialmedia"]);
    localStorage.setItem("messages", JSON.stringify(animal));
  };
  const resFullname = () => {
    setAnimal((animal) => [...animal, `developer ${time}`]);
    localStorage.setItem("messages", JSON.stringify(animal));
  };

  //PASS THESE PROPS TO COMMUNICATE COMPONENT
  const props = { theUser, animal };

  // LOGOUT
  const logOutMe = () => {
    googleAuth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
      })
      .catch((error) => alert(error.message));
  };

  // CHECK THE STATUS IF USER CURRENTLY LOG
  const [initializing, setInitializing] = React.useState(true);
  const [status, setStatus] = React.useState();

  // SET THE USER STATE
  function onAuthStateChanged(status: any) {
    setStatus(status);
    if (initializing) {
      setInitializing(false);
    }
  }

  // FIRST RENDER TO CHECK THE USER STATUS
  React.useEffect(() => {
    const subscriber = googleAuth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  // FALSE
  if (!status) {
    return (
      <div className="text-black h-40 flex flex-col items-center justify-center">
        <h1>Login</h1>
        <button className={classes.root} onClick={logSignMe}>
          {<Google />} Sign with Google
        </button>
        <p className="text-center text-sm mt-8 font-semibold">
          *You have to Sign in with Google first to it to use.
        </p>
      </div>
    );
  }
  return (
    // IF LOGIN STATUS TO TRUE
    <div>
      <div className="mx-1 text-black h-52 message_scroll">
        <Communicate {...props} />
      </div>
      {/* TEXT BOX */}
      <div className="flex flex-wrap py-1 border-t-2">
        <button className="theButtons" onClick={() => resEmail()}>
          ● Email
        </button>
        <button className="theButtons" onClick={() => resSocial()}>
          ● Social medias
        </button>
        <button className="theButtons" onClick={() => resFullname()}>
          ● Fullname
        </button>
        <button className="theButtons">● Phone No.</button>
        <button className="theButtons">● Send Message</button>
        <button className="theButtons">● Commission</button>
        <button
          className="text-white bg-red-500 rounded-lg py-1 px-2 m-1 text-base"
          onClick={logOutMe}
        >
          logout
        </button>
        <button className="text-white bg-green-500 rounded-lg py-1 px-2 m-1 text-base">
          Type Chat
        </button>
      </div>
    </div>
  );
}
