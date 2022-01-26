import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/layout";

import { Scrollbars } from "react-custom-scrollbars";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Scrollbars>
    <div className="mainContainer">
      <div className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
    // </Scrollbars>
  );
}

export default MyApp;
