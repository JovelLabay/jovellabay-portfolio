import Head from "next/head";

import AboutSelf from "../../components/about/aboutSelf";

const meta = {
  title: "Jovel Labay | About",
  description:
    "A web and mobile developer based in Cagayan de Oro, Philippines",
  name: "Jovel Labay",
  image: "",
  type: "website",
};

const About = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
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
        <AboutSelf meta={meta} />
      </main>
    </>
  );
};

export default About;
