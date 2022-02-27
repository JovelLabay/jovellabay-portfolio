import type { AppProps } from "next/app";

import "../styles/globals.css";
import "./../styles/scroll.css";

import Layout from "../layout/layout";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mainContainer">
      <div className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      {/* <div className="absolute bottom-10 right-10">dfgdf</div> */}
    </div>
  );
}

export default MyApp;
