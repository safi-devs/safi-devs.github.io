import React from "react";
import {
  Code2,
  FileCode,
  Server,
  Database,
  Zap,
  Atom,
  Layers,
  Globe,
  Box,
  Palette,
  Triangle,
  Github,
  Send,
} from "lucide-react";

const skills = [
  { name: "TypeScript", icon: <Code2 size={18} /> },
  { name: "Javascript", icon: <FileCode size={18} /> },
  { name: "Node.js", icon: <Server size={18} /> },
  { name: "MongoDB", icon: <Database size={18} /> },
  { name: "Redis", icon: <Zap size={18} /> },
  { name: "React", icon: <Atom size={18} /> },
  { name: "Redux", icon: <Layers size={18} /> },
  { name: "Next.js", icon: <Globe size={18} /> },
  { name: "PostgreSQL", icon: <Database size={18} /> },
  { name: "Prisma", icon: <Box size={18} /> },
  { name: "Tailwind CSS", icon: <Palette size={18} /> },
  { name: "Vercel", icon: <Triangle size={18} /> },
  { name: "Github", icon: <Github size={18} /> },
  { name: "Postman", icon: <Send size={18} /> },
];

const Skills = () => {
  return (
    <section className="py-8">
      <h2 className="text-[var(--color-foreground)] text-[22px] font-semibold mb-6 tracking-tight">
        Technologies & Tools
      </h2>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2.5 px-4 py-2 
                       bg-[var(--color-surface)] 
                       border border-dashed border-[var(--color-border)] 
                       rounded-[var(--radius)]
                       hover:border-[var(--color-primary)] transition-all cursor-default"
          >
            <span className="text-[var(--color-primary)]">{skill.icon}</span>
            <span className="text-[var(--color-foreground)] font-bold text-[15px]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
