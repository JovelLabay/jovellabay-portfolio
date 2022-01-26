// THIS IS FOR THE OCCURENCE OF BOTH NAV AND FOOTER
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
