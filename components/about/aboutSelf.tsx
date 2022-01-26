import Link from "next/link";

import { ArrowRightRounded } from "@mui/icons-material";

import { TheAbout } from "./about.styled";

import DetailsAbout from "./detailsAbout";
import EducationAbout from "./educationAbout";
import CertAbout from "./certAbout";

const AboutSelf = ({ meta }) => {
  const left = [
    {
      id: 10,
      name: "Contact",
      description:
        "For project inquiries or if you need some sort of programming tips on related technologies. Feel free to send me a message on your preferred platforms.",
    },
    {
      id: 20,
      name: "If you're interested to let me speak at your event?",
      description:
        "My specializations are in Web development, Mobile development, UI and UX designing, hardware and software troubleshooting, and other related emerging technologies.",
    },
    {
      id: 30,
      name: "Want to hire me as a freelancer?",
      description:
        "You can freely set a schedule here. So, we can talk about what you need for your project.",
    },
    {
      id: 40,
      name: "Social Links",
    },
  ];

  const socialLink = [
    { id: 100, name: "Facebook" },
    { id: 200, name: "Instagram" },
    { id: 300, name: "Tiktok" },
    { id: 400, name: "Twitter" },
  ];

  return (
    <TheAbout>
      <div className="mx-4">
        <h1 className="text-5xl md:text-8xl font-bold ">About</h1>
        <h3 className="pt-4 pb-14 text-zinc-400">{meta.description}</h3>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/3 md:mr-10 ">
            {left.map((lefts) => (
              <div className="py-4" key={lefts.id}>
                <h1 className="font-bold py-2">{lefts.name}</h1>
                <h3 className="font-light text-zinc-400">
                  {lefts.description}{" "}
                  {lefts.id === 10 ? (
                    <Link href="">
                      <a className="font-normal text-white transform hover:text-zinc-400 transition duration-2000 ease-out">
                        Contact me.
                      </a>
                    </Link>
                  ) : lefts.id === 30 ? (
                    <Link href="">
                      <a className="font-normal text-white transform hover:text-zinc-400 transition duration-2000 ease-out">
                        Schedule it here.
                      </a>
                    </Link>
                  ) : lefts.id === 40 ? (
                    <div className="flex flex-col">
                      {socialLink.map((socialLinks) => (
                        <Link key={socialLinks.id} href="">
                          <a className="py-2 pl-2 transform hover:text-white transition duration-2000 ease-out">
                            <ArrowRightRounded sx={{ fontSize: 40 }} />
                            {socialLinks.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
            ))}
          </div>
          <div className="md:ml-10 py-4 md:w-3/5">
            <DetailsAbout />
            <EducationAbout />
            <CertAbout />
          </div>
        </div>
      </div>
    </TheAbout>
  );
};

export default AboutSelf;
