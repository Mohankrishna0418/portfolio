const About = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          About
        </h1>
      </div>
      <div className="text-white flex-wrap flex flex-col gap-2  text-start ">
        <p>
          I’m a self-taught Full-Stack Mobile Developer with hands-on experience
          in building cross-platform applications and scalable web solutions. My
          tech stack spans web development using modern web frameworks like
          Next.js, React.js.</p>
          <p> I’m also proficient in backend
          development with Node.js. With a growing interest in
          artificial intelligence, I’ve explored projects in focusing on real-world applications like malware detection
          and cancer prediction.</p> 
          <p>My GitHub profile reflects a commitment to
          continuous learning and practical experimentation, featuring projects
          in AI, web development, and useful everyday tools.
        </p>
      </div>
    </div>
  );
};

export default About;
