import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const socialLinks = [
    {
      title: "GitHub",
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/Mohankrishna0418",
    },
    {
      title: "Instagram",
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://www.instagram.com/__mr_mk____/",
    },
    {
      title: "X/Twitter",
      tag: <FaXTwitter size={16} />,
      url: "https://x.com/mohankrishna411",
    },
    {
      title: "LinkedIn",
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/mohan-krishna-a-8bba622a8/",
    },
  ];

  return (
    <div className="w-full px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto  ">
      <img
        src="../../public/profile.JPG"
        alt="Mohan Krishna A"
        className="rounded-full w-45 h-35 object-cover border p-1"
      />

      <div className="flex flex-col items-center md:items-start w-full gap-5 p-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-amber-50 text-center md:text-left">
          Mohan Krishna A (Fullstack Developer)
        </h1>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <button className="text-sm text-blue-500 transition duration-150 ease-in-out px-3 py-1 rounded-xl cursor-pointer border border-blue-500">
            Developer
          </button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
            >
              {item.tag}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
