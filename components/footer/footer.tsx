import Link from "next/link";

import { ArrowRightRounded, ArrowDropUpRounded } from "@mui/icons-material";

import { TheFooter } from "./footer.styled";

const Footer = () => {
  const externalLink = [
    { id: 10, name: "Twitter", icon: "Twitter" },
    { id: 20, name: "GitHub", icon: "GitHub" },
    { id: 30, name: "LinkedIn", icon: "LinkedIn" },
  ];

  const otherLink = [
    { id: 10, name: "Download" },
    { id: 20, name: "Send Email" },
  ];

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TheFooter>
      <div className="grid grid-cols-2 mx-4">
        <div className="flex flex-col">
          {externalLink.map((externalLinks) => (
            <Link href="" key={externalLinks.id}>
              <a className="py-3 transform hover:text-zinc-400 transition duration-2000 ease-out">
                <ArrowRightRounded sx={{ fontSize: 20 }} />
                {externalLinks.name}
              </a>
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-col">
            {otherLink.map((otherLinks) => (
              <Link href="" key={otherLinks.id}>
                <a className="py-3">{otherLinks.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        <ArrowDropUpRounded
          sx={{ fontSize: 50, color: "black" }}
          onClick={scrollUp}
          className="bg-white rounded-full cursor-pointer"
        />
      </div>
    </TheFooter>
  );
};

export default Footer;
