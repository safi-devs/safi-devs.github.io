import { ArrowUpRight } from "lucide-react";
import { Hero } from "../components/Hero";
import Projects from "../components/Project/ProjectCard";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      {/* View All btn */}
      <div className="flex justify-center mt-12 animate-fade-in animation-delay-500">
        <button
          className="flex items-center gap-2 px-5 py-2.5 
                bg-[var(--color-surface)] border border-[var(--color-border)] 
                rounded-[var(--radius)] font-bold text-sm hover:bg-black/20 transition-all"
        >
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>

      <Contact />
    </div>
  );
};

export default Home;
