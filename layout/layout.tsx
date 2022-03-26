// THIS IS FOR THE OCCURRENCE OF BOTH NAV AND FOOTER
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import React from "react";

import { motion } from "framer-motion";

class Layout extends React.Component<{
  children: any;
  colorTheme: any;
  setColorTheme: any;
}> {
  render() {
    let { children, colorTheme, setColorTheme } = this.props;
    return (
      <>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Navbar />
        </motion.div>
        {children}
        <Footer colorTheme={colorTheme} setColorTheme={setColorTheme} />
      </>
    );
  }
}

export default Layout;
