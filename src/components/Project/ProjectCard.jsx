// import { ArrowUpRight, Github } from "lucide-react";

// const projects = [
//   {
//     title: "TourBee",
//     description:
//       "TourBee is a comprehensive tour management and booking platform designed to simplify the travel experience.",
//     image: "/projects/project1.png",
//     tags: [
//       "Typescript",
//       "NodeJS",
//       "Express.js",
//       "MongoDB",
//       "React",
//       "Redux Toolkit",
//       "Javascript",
//       "Tailwind",
//     ],
//     link: "https://tour-bee-theta.vercel.app",
//     github: "https://github.com/7saffix/TourBee-server",
//   },
//   {
//     title: "Work Flow",
//     description:
//       "A modern Inventory Management System built to manage products, sales, purchases, customers, suppliers, expenses, and analytics with a clean admin dashboard UI.",
//     image: "/projects/project2.png",
//     tags: [
//       "Typescript",
//       "NodeJS",
//       "Express.js",
//       "MongoDB",
//       "React",
//       "Redux Toolkit",
//       "Javascript",
//       "Tailwind",
//     ],
//     link: "https://work-flow-inventory-management-syst.vercel.app",
//     github: "https://github.com/7saffix/Work-Flow-server",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="relative overflow-hidden">
//       {/* Bg glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mx-auto max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Featured Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Projects that
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               make an impact.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A selection of my recent work, from complex web applications to
//             innovative tools that solve real-world problems.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0
//                 bg-gradient-to-t from-card via-card/50
//                  to-transparent opacity-60"
//                 />
//                 {/* Overlay Links */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={project.github}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <Github className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 <div className="flex items-start justify-between">
//                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>

//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </a>
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "TourBee",
    description:
      "TourBee is a comprehensive tour management and booking platform designed to simplify the travel experience.",
    image: "/projects/project1.png",
    tags: [
      "Typescript",
      "NodeJS",
      "Express.js",
      "MongoDB",
      "React",
      "Redux Toolkit",
      "Javascript",
      "Tailwind",
    ],
    link: "https://tour-bee-theta.vercel.app",
    github: "https://github.com/7saffix/TourBee-server",
  },
  {
    title: "Work Flow",
    description:
      "A modern Inventory Management System built to manage products, sales, purchases, customers, suppliers, expenses, and analytics with a clean admin dashboard UI.",
    image: "/projects/project2.png",
    tags: [
      "Typescript",
      "NodeJS",
      "Express.js",
      "MongoDB",
      "React",
      "Redux Toolkit",
      "Javascript",
      "Tailwind",
    ],
    link: "https://work-flow-inventory-management-syst.vercel.app",
    github: "https://github.com/7saffix/Work-Flow-server",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-16">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Image Gallery Block */}
                <div className="relative overflow-hidden aspect-video w-full bg-surface">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 
                    bg-gradient-to-t from-[var(--color-card)] via-[var(--color-card)]/40
                    to-transparent opacity-60"
                  />

                  {/* Desktop Hover Link Overlays */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      className="p-3 rounded-full glass bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="p-3 rounded-full glass bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info Text Content Container */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {project.description}
                  </p>

                  {/* ================= MOBILE EXPLICIT LINK ACTIONS (Hidden on Desktop) ================= */}
                  <div className="flex items-center gap-3 pt-1 md:hidden">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      Live
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-surface border border-border text-foreground hover:bg-background transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Codebase
                    </a>
                  </div>
                </div>
              </div>

              {/* Tags Panel Row */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-surface text-[10px] font-semibold border border-border/40 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
