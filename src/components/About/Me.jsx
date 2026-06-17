// import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Clean Code",
//     description:
//       "Writing maintainable, scalable code that stands the test of time.",
//   },
//   {
//     icon: Rocket,
//     title: "Performance",
//     description:
//       "Optimizing for speed and delivering lightning-fast user experiences.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     description: "Working closely with teams to bring ideas to life.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description:
//       "Staying ahead with the latest technologies and best practices.",
//   },
// ];

// const Me = () => {
//   return (
//     <div className="container mx-auto relative z-10">
//       <div className="grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Column */}
//         {/* <div className="space-y-8">
//           <div className="animate-fade-in">
//             <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
//               About Me
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
//             Building the future,
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               one component at a time.
//             </span>
//           </h2>
//           <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
//             <p>
//               I’m <strong>Shah Aziz Chowdhury Safi</strong> — a Software
//               Engineer & Full‑Stack Problem Solver passionate about building
//               real‑world applications from idea to deployment. I enjoy tackling
//               technical challenges, designing efficient architectures, and
//               writing clean, maintainable code that delivers real impact.
//               Constantly expanding my skill set, I love creating solutions that
//               are both practical and elegant.
//             </p>

//             <p>
//               <strong>What I Do</strong> 💻
//               <br />• Full‑Stack Development: Building web apps using modern
//               technologies like JavaScript, TypeScript, Node.js, React, Next.js,
//               and more.
//               <br />• Backend & APIs: Designing scalable backend systems with
//               Node.js, Prisma, PostgreSQL, MongoDB, Redis.
//               <br />• Dev Tools & UI: Practical use of CSS, Tailwind CSS, HTML,
//               and UI libraries for clean interfaces.
//               <br />• Continuous Learning: Constantly exploring new tools and
//               best practices to grow as a developer.
//             </p>
//           </div>

//           <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
//             <p className="text-lg font-medium italic text-foreground">
//               "My mission is to create digital experiences that are not just
//               functional, but truly delightful — products that users love to use
//               and developers love to maintain."
//             </p>
//           </div>
//         </div> */}

//         <div className="space-y-8">
//           <div className="animate-fade-in">
//             <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
//               About Me
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
//             Engineering the modern web,
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               from logic to layout.
//             </span>
//           </h2>

//           <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200">
//             <p className="leading-relaxed">
//               I’m <strong>Shah Aziz Chowdhury Safi</strong> — a Software
//               Engineer and Full‑Stack Architect driven by the art of turning
//               complex problems into seamless digital reality. I specialize in
//               engineering high-performance applications, prioritizing clean
//               architecture and maintainable code that scales alongside the
//               businesses it powers.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
//               <div className="space-y-2">
//                 <div className="space-y-2">
//                   <h3 className="text-[var(--color-foreground)] font-bold flex items-center gap-2 tracking-tight">
//                     <span className="text-sm">🎨</span> Frontend Excellence
//                   </h3>
//                   <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
//                     Building high-performance, responsive interfaces using{" "}
//                     <strong className="text-[var(--color-primary)] font-bold">
//                       React, Nextjs,Tailwind CSS
//                     </strong>{" "}
//                     for pixel-perfect, accessible user experiences.
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-foreground font-semibold flex items-center gap-2">
//                   <span className="text-xs">⚙️</span> Backend Architecture
//                 </h3>
//                 <p className="text-sm">
//                   Engineering robust APIs and systems with{" "}
//                   <strong className="text-[var(--color-primary)]">
//                     Express,MongoDB,Mongoose and PostgreSQL,Prisma{" "}
//                   </strong>
//                   to ensure data integrity and speed.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
//             <p className="text-lg font-medium italic text-foreground">
//               "Code is like humor. When you have to explain it, it's bad. – Cory
//               House"
//             </p>
//           </div>
//         </div>

//         {/* Right Column - Hilights */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {highlights.map((item, idx) => (
//             <div
//               key={idx}
//               className="glass p-6 rounded-2xl animate-fade-in"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
//                 <item.icon className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-muted-foreground">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Me;

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const Me = () => {
  return (
    <div className="container mx-auto relative z-10 px-6 py-12 max-w-7xl">
      <div className="space-y-10">
        {/* Top Section: Split Layout for Intro and Top-Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side Info - Clean text sizing */}
          <div className="space-y-4 lg:col-span-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-xs font-semibold tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Slightly reduced heading text size */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering the modern web,
              <span className="font-serif italic font-normal text-white">
                {" "}
                from logic to layout.
              </span>
            </h2>

            {/* Refined paragraph text size */}
            <p className="leading-relaxed text-muted-foreground text-sm animate-fade-in animation-delay-200">
              I’m <strong>Shah Aziz Chowdhury Safi</strong> — a Software
              Engineer and Full‑Stack Architect driven by the art of turning
              complex problems into seamless digital reality. I specialize in
              engineering high-performance applications, prioritizing clean
              architecture and maintainable code that scales alongside the
              businesses it powers.
            </p>
          </div>

          {/* Right Side Image - Made smaller and removed grayscale filter */}
          <div className="relative animate-fade-in animation-delay-200 flex justify-center lg:justify-end lg:col-span-4">
            {/* Reduced max-width constraint to make the image smaller */}
            <div className="relative w-full max-w-[260px]">
              {/* Ambient Back Glow Effect */}
              <div
                className="absolute inset-0 
                rounded-2xl bg-gradient-to-br 
                from-primary/10 via-transparent 
                to-primary/5 blur-xl animate-pulse"
              />

              {/* Image Container */}
              <div className="relative glass rounded-2xl glow-border p-1.5">
                <img
                  src="/profile-photo.png"
                  alt="Safi Profile"
                  className="w-full aspect-[4.5/5] object-cover rounded-xl transition-all duration-300"
                />

                {/* Status Indicator Overlay */}
                <div className="absolute -bottom-2 -right-2 glass rounded-lg px-3 py-1.5 animate-float">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[11px] font-semibold text-foreground tracking-wide">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Technical Details and Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4 items-start">
          {/* Bottom Left: Tech Stack & Quote */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <h3 className="text-[var(--color-foreground)] text-sm font-bold flex items-center gap-1.5 tracking-tight">
                  <span className="text-xs">🎨</span> Frontend Excellence
                </h3>
                <p className="text-[11px] text-[var(--color-muted-foreground)] leading-relaxed">
                  Building high-performance, responsive interfaces using{" "}
                  <strong className="text-[var(--color-primary)] font-bold">
                    React, Nextjs, Tailwind CSS
                  </strong>{" "}
                  for pixel-perfect layouts.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-[var(--color-foreground)] text-sm font-bold flex items-center gap-1.5 tracking-tight">
                  <span className="text-xs">⚙️</span> Backend Architecture
                </h3>
                <p className="text-[11px] text-[var(--color-muted-foreground)] leading-relaxed">
                  Engineering robust APIs and enterprise systems with{" "}
                  <strong className="text-[var(--color-primary)] font-bold">
                    Express, MongoDB, Mongoose, PostgreSQL, Prisma
                  </strong>{" "}
                  to ensure processing speed.
                </p>
              </div>
            </div>

            {/* Blockquote Box */}
            <div className="glass rounded-xl p-4 glow-border animate-fade-in animation-delay-300">
              <p className="text-sm font-medium italic text-foreground leading-relaxed">
                "Code is like humor. When you have to explain it, it's bad. –
                Cory House"
              </p>
            </div>
          </div>

          {/* Bottom Right: Core Highlights Panel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-4 rounded-xl animate-fade-in flex flex-col justify-between border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-all duration-300 min-h-[125px]"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5 hover:bg-primary/20 transition-colors">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold text-[var(--color-foreground)] tracking-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
