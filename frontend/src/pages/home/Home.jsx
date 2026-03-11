import Navbar from "../../components/Navbar";
import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import Awards from "../../components/home/Awards";
import Pricing from "../../components/home/Pricing";
import Education from "../../components/home/Education";
import OpenAccount from "../../components/OpenAccount";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default Home;
