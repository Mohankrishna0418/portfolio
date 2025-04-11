import Container from "../../components/Container";
import Footer from "../../components/Footer";

import About from "../About/About";
import Connect from "../Connect/Connect";
import Education from "../Education/Education";
import Experience from "../Experience/Exper";

import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 scroll-smooth">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Connect />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;