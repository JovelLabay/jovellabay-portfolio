import React from "react";

import Head from "next/head";
import { async } from "@firebase/util";
import { type } from "os";

const meta: any = {
  title: `Jovel Labay | Projects | `,
  description:
    "A web and mobile developer based in Cagayan de Oro, Philippines",
  name: "Jovel Labay",
  image: "",
  type: "website",
};

const ProductDetails = () => {
  //   // FOR CURRENT URL
  const URL = window.location.href;
  const kaka = URL.length;
  const mama = URL.slice(36, kaka);

  // const [loading, setLoading] = React.useState<string>("fetch");

  // const fetchMe = async () => {
  //   const domain = "https://jsonplaceholder.typicode.com/posts";

  //   setLoading("loading");

  //   fetch(domain)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       res.forEach((element: string | number) => {
  //         if (element.id <= 50) {
  //           console.log(element.id);
  //         }
  //         setLoading("fetch");
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading("error try again");
  //     });
  // };
  return (
    <>
      <Head>
        <title>{`${meta.title} ${mama}`}</title>
        <meta
          name="google-site-verification"
          content="_0hquK8KU9XAoLpR9mpQgrBaR6hd1We4fCBsjyIk8K4"
        />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content="" />
        <link rel="canonical" href="" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.title} />
      </Head>

      <main>
        <div className="h-screen mx-4 my-7">
          <h1>
            {"projects id: "}
            {URL}
          </h1>
          {/* <button onClick={fetchMe}>{loading}</button> */}
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
