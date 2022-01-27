// THIS IS FOR THE OCCURRENCE OF BOTH NAV AND FOOTER
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
