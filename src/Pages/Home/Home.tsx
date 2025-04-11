import Container from "../../components/Container";
import Footer from "../../components/Footer";

import Experience from "../Experience/Exper";
import About from "../About/About";


import Hero from "../Hero/Hero";


const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 scroll-smooth">
          <Hero />
          <About />
          <Experience />
          
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;