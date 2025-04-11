import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  const socialLinks = [
    {
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/Mohankrishna0418",
    },
    {
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://www.instagram.com/__mr_mk____/",
    },
    {
      tag: <FaXTwitter size={16} />,
      url: "https://x.com/mohankrishna411",
    },
    {
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/mohan-krishna-a-8bba622a8/",
    },
  ];

  return (
    <footer className="bg-gray-700 mt-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-400 md:items-center">
            Copyright © {new Date().getFullYear()} — All rights reserved by 
            <span> Mohan Krishna A</span>
          </div>

          {/* Center: Navigation */}
          <div className="flex justify-center gap-6 text-sm underline underline-offset-4 text-white">
            <NavLink to="/attributions" className="hover:text-white transition">
              Attributions
            </NavLink>
            <NavLink to="/shout-outs" className="hover:text-white transition">
              Shout Outs
            </NavLink>
            <a href="#" className="hover:text-white transition">
              Affiliates
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center space-x-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
              >
                {item.tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;