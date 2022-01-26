import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mainContainer">
      <div className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
