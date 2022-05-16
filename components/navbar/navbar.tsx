import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { LightMode, DarkMode } from "@mui/icons-material";

import Link from "next/link";

import React, { useState, useContext } from "react";

import { NavBar } from "./navbar.styled";

import scripts from "../../scripts.json";

const Navbar = () => {
  const menu = [
    { id: 10, name: "Education" },
    { id: 20, name: "Projects" },
    { id: 30, name: "Testimonials" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <NavBar>
      <div className="md:flex justify-between items-center mx-4">
        <Link href="/">
          <div className="cursor-pointer">
            <h1 className="text-3xl font-black">{scripts.titleName}</h1>
            {/* <h1 className="font-light">{scripts.titleField}</h1> */}
          </div>
        </Link>
        <div className="flex">
          {menu.map((menus) => (
            <Link
              href={
                menus.id === 10
                  ? "/views/about"
                  : menus.id === 20
                  ? "/views/project"
                  : ""
              }
              key={menus.id}
            >
              <a
                className="mx-1 my-5 md:my-0 transform hover:text-zinc-400 hover:scale-90 transition duration-2000 ease-out"
                onClick={() => {
                  menus.id === 10
                    ? null
                    : menus.id === 20
                    ? null
                    : setOpen(true);
                }}
              >
                {menus.name}
              </a>
            </Link>
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
            This site is not yet available for the public.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Come back soon
          </Button>
        </DialogActions>
      </Dialog>
    </NavBar>
  );
};

export default Navbar;
