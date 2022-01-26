import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Link from "next/link";

import React, { useState } from "react";

import { NavBar } from "../../components/navbar/navbar.styled";

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
      <div className="md:flex justify-between items-center">
        <Link href="/">
          <div className="mx-4 cursor-pointer">
            <h1 className="text-3xl font-bold">{scripts.titleName}</h1>
            <h1 className="font-light">{scripts.titleField}</h1>
          </div>
        </Link>
        <div className="flex">
          {menu.map((menus) => (
            <Link href={menus.id === 10 ? "/views/about" : ""} key={menus.id}>
              <a
                className="mx-4 my-5 md:my-0 transform hover:text-zinc-400 transition duration-2000 ease-out"
                onClick={() => {
                  menus.id === 10 ? "" : setOpen(true);
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
