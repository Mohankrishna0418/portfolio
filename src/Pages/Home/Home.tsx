import Container from "../../components/Container";
import Footer from "../../components/Footer/Footer";

import Experience from "../Experience/Exper";
import About from "../About/About";

import Connect from "../Connect/Connect";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";


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