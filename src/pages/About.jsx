import Skills from "../components/About/Skills";
import FunFacts from "../components/About/FunFact";
import Me from "../components/About/Me";

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <Me />
      <Skills />
      <FunFacts />
    </section>
  );
};

export default About;
