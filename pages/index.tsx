import Head from "next/head";

import Introduction from "../components/containers/home/introduction";
import Projects from "../components/containers/projects/projects";
import Events from "../components/containers/events/events";

const meta = {
  title: "Jovel Labay | Web & Mobile Developer",
  description:
    "A web and mobile developer based in Cagayan de Oro, Philippines",
  name: "Jovel Labay",
  image: "",
  type: "website",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="google-site-verification" content="_0hquK8KU9XAoLpR9mpQgrBaR6hd1We4fCBsjyIk8K4" />
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
        <Introduction />
        <Projects />
        <Events />
      </main>
    </>
  );
}
