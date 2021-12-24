import { Container } from "./styles";
import MainLayout from "layout/MainLayout";

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";

const Home = () => {
  return (
    <MainLayout>
      <Container id="content" className="container">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </Container>
    </MainLayout>
  );
};

export default Home;
