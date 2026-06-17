// import {
//   ChevronDown,
//   Linkedin,
//   Twitter,
//   Github,
//   Code2,
//   FileCode,
//   Server,
//   Database,
//   Zap,
//   Atom,
//   Layers,
//   Globe,
//   Box,
//   Palette,
//   Triangle,
//   Send,
//   FileText,
// } from "lucide-react";
// import { Link } from "react-router";

// const skills = [
//   { name: "TypeScript", icon: <Code2 size={18} /> },
//   { name: "Javascript", icon: <FileCode size={18} /> },
//   { name: "Node.js", icon: <Server size={18} /> },
//   { name: "MongoDB", icon: <Database size={18} /> },
//   { name: "Redis", icon: <Zap size={18} /> },
//   { name: "React", icon: <Atom size={18} /> },
//   { name: "Redux", icon: <Layers size={18} /> },
//   { name: "Next.js", icon: <Globe size={18} /> },
//   { name: "PostgreSQL", icon: <Database size={18} /> },
//   { name: "Prisma", icon: <Box size={18} /> },
//   { name: "Tailwind CSS", icon: <Palette size={18} /> },
//   { name: "Vercel", icon: <Triangle size={18} /> },
//   { name: "Github", icon: <Github size={18} /> },
//   { name: "Postman", icon: <Send size={18} /> },
// ];

// export const Hero = () => {
//   return (
//     <section className="relative flex items-center overflow-hidden">
//       {/* Bg */}
//       {/* <div className="absolute ">
//         <img
//           src="/hero-bg.jpg"
//           alt="Hero image"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
//       </div> */}

//       {/* Green Dots */}
//       {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1.5 h-1.5 rounded-full opacity-60"
//             style={{
//               backgroundColor: "#20B2A6",
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `slow-drift ${
//                 15 + Math.random() * 20
//               }s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div> */}

//       {/* Content */}
//       <div className="container mx-auto px-6  pt-32 pb-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column - Text Content */}
//           <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
//                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//                 Software Engineer • Full stack problem solver
//               </span>
//             </div>
//             {/* Headline */}
//             <div className="space-y-4">
//               <h1 className="text-2xl lg:text-3xl 2xl:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
//                 Hello world !{" "}
//                 <span className="text-primary glow-text">Safi</span>
//                 <br />
//                 is a {"  "}
//                 <span className="font-serif italic font-normal text-white">
//                   Full Stack developer.
//                 </span>
//               </h1>
//               <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
//                 Engineering the digital world — where ideas evolve into
//                 impactful web experiences
//               </p>
//             </div>
//             {/* CTAs */}
//             <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://drive.google.com/file/d/1iWfmFFga9bWguDXO-ov7iwlmRaoKtq-f/view?usp=drive_link"
//                 className="flex items-center gap-2 px-3 sm:px-5 py-2.5
//           bg-[var(--color-surface)] border border-[var(--color-border)]
//           rounded-[var(--radius)] font-bold text-xs sm:text-sm hover:bg-black/20 transition-all"
//               >
//                 <FileText size={18} />
//                 Resume / CV
//               </a>

//               {/* Primary Button: Get in touch */}
//               <Link
//                 to={"/contact"}
//                 className="flex items-center gap-2 px-3 sm:px-5 py-2.5
//           bg-[#F0F2F5] text-[#0F1418] rounded-[var(--radius)]
//           font-bold text-xs sm:text-sm hover:bg-white transition-all"
//               >
//                 <Send size={18} />
//                 Get in touch
//               </Link>
//             </div>
//             {/* Social Links */}
//             <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
//               <span className="text-sm text-muted-foreground">Follow me: </span>
//               {[
//                 { icon: Github, href: "https://github.com/7saffix" },
//                 {
//                   icon: Linkedin,
//                   href: "https://www.linkedin.com/in/shah-aziz-chowdhury-safi",
//                 },
//                 { icon: Twitter, href: "https://x.com/_saffix_" },
//               ].map((social, idx) => (
//                 <a
//                   target="_blank"
//                   key={idx}
//                   href={social.href}
//                   className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
//                 >
//                   {<social.icon className="w-5 h-5" />}
//                 </a>
//               ))}
//             </div>
//           </div>
//           {/* Right Column - Profile Image */}
//           <div className="relative animate-fade-in animation-delay-300">
//             {/* Profile Image */}
//             <div className="relative max-w-80 mx-auto">
//               <div
//                 className="absolute inset-0
//               rounded-3xl bg-gradient-to-br
//               from-primary/30 via-transparent
//               to-primary/10 blur-2xl animate-pulse"
//               />
//               <div className="relative glass rounded-3xl glow-border">
//                 <img
//                   src="/profile-photo.png"
//                   alt="Safi"
//                   className="w-full aspect-[4.5/5] object-cover rounded-2xl"
//                 />

//                 {/* Floating Badge */}
//                 <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                     <span className="text-sm font-medium">
//                       Available for work
//                     </span>
//                   </div>
//                 </div>
//                 {/* Stats Badge */}
//                 {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
//                   <div className="text-2xl font-bold text-primary">2+</div>
//                   <div className="text-xs text-muted-foreground">
//                     Years Exp.
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="mt-20 animate-fade-in animation-delay-600">
//           <p className="text-sm text-muted-foreground mb-6 text-center">
//             Technologies I work with
//           </p>
//           <div className="relative overflow-hidden">
//             <div
//               className="absolute left-0 top-0 bottom-0 w-32
//              bg-gradient-to-r from-background to-transparent z-10"
//             />
//             <div
//               className="absolute right-0 top-0 bottom-0 w-32
//              bg-gradient-to-l from-background to-transparent z-10"
//             />
//             <div className="flex animate-marquee">
//               {[...skills, ...skills].map((skill, idx) => (
//                 <div key={idx} className="flex-shrink-0 px-2 py-8">
//                   <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
//                     {/* {skill} */}

//                     <div
//                       key={skill.name}
//                       className="flex items-center gap-2.5 px-4 py-2 bg-[#161617]
//                        border border-dashed border-[#333333] rounded-xl
//                        hover:border-zinc-500 transition-colors cursor-default"
//                     >
//                       {/* Lucide Icon */}
//                       <span className="text-white">{skill.icon}</span>
//                       {/* Skill Name */}
//                       <span className="text-white font-bold text-[15px]">
//                         {skill.name}
//                       </span>
//                     </div>
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import {
//   ChevronDown,
//   Linkedin,
//   Twitter,
//   Github,
//   Code2,
//   FileCode,
//   Server,
//   Database,
//   Zap,
//   Atom,
//   Layers,
//   Globe,
//   Box,
//   Palette,
//   Triangle,
//   Send,
//   FileText,
// } from "lucide-react";
// import { Link } from "react-router";

// const skills = [
//   { name: "TypeScript", icon: <Code2 size={18} /> },
//   { name: "Javascript", icon: <FileCode size={18} /> },
//   { name: "Node.js", icon: <Server size={18} /> },
//   { name: "MongoDB", icon: <Database size={18} /> },
//   { name: "Redis", icon: <Zap size={18} /> },
//   { name: "React", icon: <Atom size={18} /> },
//   { name: "Redux", icon: <Layers size={18} /> },
//   { name: "Next.js", icon: <Globe size={18} /> },
//   { name: "PostgreSQL", icon: <Database size={18} /> },
//   { name: "Prisma", icon: <Box size={18} /> },
//   { name: "Tailwind CSS", icon: <Palette size={18} /> },
//   { name: "Vercel", icon: <Triangle size={18} /> },
//   { name: "Github", icon: <Github size={18} /> },
//   { name: "Postman", icon: <Send size={18} /> },
// ];

// export const Hero = () => {
//   return (
//     <section className="relative flex items-center overflow-hidden w-full">
//       {/* Content */}
//       <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
//         {/* Main Content Wrapper - Centered alignment */}
//         <div className="w-full max-w-5xl mx-auto flex flex-col sm:items-center sm:text-center space-y-8">
//           {/* Top Status Badge */}
//           <div className="animate-fade-in">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
//               <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//               Software Engineer • Full stack problem solver
//             </span>
//           </div>

//           {/* Headline Block */}
//           <div className="space-y-4 w-full">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
//               Hello world !<span className="text-primary glow-text">Safi</span>
//               <br />
//               is a{" "}
//               <span className="font-serif italic font-normal text-white">
//                 Full Stack developer.
//               </span>
//             </h1>
//             <p className="text-base sm:text-lg text-muted-foreground mx-auto animate-fade-in animation-delay-200">
//               Engineering the digital world — where ideas evolve into impactful
//               web experiences
//             </p>
//           </div>

//           {/* Call to Actions (Buttons) */}
//           <div className="flex sm:justify-center sm:items-center gap-4 animate-fade-in animation-delay-300 w-full">
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://drive.google.com/file/d/1iWfmFFga9bWguDXO-ov7iwlmRaoKtq-f/view?usp=drive_link"
//               className="flex items-center gap-2 px-5 py-2.5
//                 bg-[var(--color-surface)] border border-[var(--color-border)]
//                 rounded-[var(--radius)] font-bold text-xs sm:text-sm hover:bg-black/20 transition-all"
//             >
//               <FileText size={18} />
//               Resume / CV
//             </a>

//             {/* Primary Button: Get in touch */}
//             <Link
//               to={"/contact"}
//               className="flex items-center gap-2 px-5 py-2.5
//                 bg-[#F0F2F5] text-[#0F1418] rounded-[var(--radius)]
//                 font-bold text-xs sm:text-sm hover:bg-white transition-all"
//             >
//               <Send size={18} />
//               Get in touch
//             </Link>
//           </div>

//           {/* Social Links Panel */}
//           <div className="flex items-center sm:justify-center gap-4 animate-fade-in animation-delay-400 w-full">
//             <span className="text-sm text-muted-foreground">Follow me: </span>
//             {[
//               { icon: Github, href: "https://github.com/7saffix" },
//               {
//                 icon: Linkedin,
//                 href: "https://www.linkedin.com/in/shah-aziz-chowdhury-safi",
//               },
//               { icon: Twitter, href: "https://x.com/_saffix_" },
//             ].map((social, idx) => (
//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 key={idx}
//                 href={social.href}
//                 className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
//               >
//                 <social.icon className="w-5 h-5" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Endless Skills Marquee Section */}
//         <div className="mt-28 animate-fade-in animation-delay-600">
//           <p className="text-sm text-muted-foreground mb-6 text-center">
//             Technologies I work with
//           </p>
//           <div className="relative overflow-hidden">
//             {/* Blending Side Fades */}
//             <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
//             <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

//             <div className="flex animate-marquee">
//               {[...skills, ...skills].map((skill, idx) => (
//                 <div key={idx} className="flex-shrink-0 px-2 py-4">
//                   <div
//                     className="flex items-center gap-2.5 px-4 py-2 bg-[#161617]
//                      border border-dashed border-[#333333] rounded-xl
//                      hover:border-zinc-500 transition-colors cursor-default"
//                   >
//                     <span className="text-white">{skill.icon}</span>
//                     <span className="text-white font-bold text-[15px]">
//                       {skill.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import {
  ChevronDown,
  Linkedin,
  Twitter,
  Github,
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
  Send,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

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

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between overflow-hidden w-full min-h-screen">
      {/* Main Content Split Grid */}
      <div className="container mx-auto px-6 pt-36 pb-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* ================= LEFT SIDE: YOUR EXACT UNCHANGED CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 max-w-2xl">
            {/* Top Status Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full stack problem solver
              </span>
            </div>

            {/* Headline Block */}
            <div className="space-y-4 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Hello world !{" "}
                <span className="text-primary glow-text">Safi</span>
                <br />
                is a{" "}
                <span className="font-serif italic font-normal text-white">
                  Full Stack developer.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Engineering the digital world — where ideas evolve into
                impactful web experiences
              </p>
            </div>

            {/* Call to Actions (Buttons) */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300 w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1iWfmFFga9bWguDXO-ov7iwlmRaoKtq-f/view?usp=drive_link"
                className="flex items-center gap-2 px-5 py-2.5 
                  bg-[var(--color-surface)] border border border-[var(--color-border)] 
                  rounded-[var(--radius)] font-bold text-xs sm:text-sm hover:bg-black/20 transition-all"
              >
                <FileText size={18} />
                Resume / CV
              </a>

              {/* Primary Button: Get in touch */}
              <Link
                to={"/contact"}
                className="flex items-center gap-2 px-5 py-2.5 
                  bg-[#F0F2F5] text-[#0F1418] rounded-[var(--radius)] 
                  font-bold text-sm hover:bg-white transition-all"
              >
                <Send size={18} />
                Get in touch
              </Link>
            </div>

            {/* Social Links Panel */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 w-full">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/7saffix" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/shah-aziz-chowdhury-safi",
                },
                { icon: Twitter, href: "https://x.com/_saffix_" },
              ].map((social, idx) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE: TERMINAL CODE FRAME FROM SCREENSHOT (244).jpg ================= */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-fade-in animation-delay-200">
            {/* Top Indicator Badge */}
            <div className="absolute -top-3 left-6 z-20 glass px-2.5 py-1 rounded-md text-[10px] font-bold text-indigo-400 flex items-center gap-1 border border-indigo-500/20">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
              <span>Optimized Bundle</span>
            </div>

            {/* Terminal Mock Frame Box */}
            <div className="w-full max-w-sm glass border border-[var(--color-border)] rounded-2xl p-4 bg-[#14161d]/80 relative shadow-2xl backdrop-blur-md">
              {/* Header Title Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]/40 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                  safi.ts
                </span>
              </div>

              <div className="font-mono text-xs space-y-1.5 text-left leading-relaxed select-none">
                <p className="text-muted-foreground/60 italic">
                  // shipping things you'll be proud of
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">safi</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">stack:</span> [
                  <span className="text-amber-300">'node'</span>,
                  <span className="text-amber-300">'express'</span>,
                  <span className="text-amber-300">'react'</span>,{" "}
                  <span className="text-amber-300">'next.js'</span>, ],
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">databases:</span> [
                  <span className="text-amber-300">'mongodb'</span>,{" "}
                  <span className="text-amber-300">'postgresql'</span>],
                </p>

                <p className="pl-4">
                  <span className="text-zinc-400">build:</span>{" "}
                  <span className="text-blue-400">async</span> () =&gt;{" "}
                  <span className="text-amber-300">'your_idea'</span>
                </p>
                <p>&#125;;</p>
                <p className="pt-2">
                  <span className="text-zinc-500">&gt;</span>{" "}
                  <span className="text-blue-400">safi</span>.
                  <span className="text-purple-400">build</span>()
                  <span className="animate-pulse inline-block w-1.5 h-3.5 bg-white ml-1 align-middle" />
                </p>
              </div>

              {/* Bottom Badge Decoration */}
              <div className="absolute -bottom-3 left-4 z-20 glass px-2.5 py-1 rounded-md text-[10px] font-medium text-muted-foreground flex items-center gap-1 border border-[var(--color-border)]">
                <Sparkles size={10} className="text-yellow-400" />
                <span>Production ready</span>
              </div>
            </div>

            {/* Decorative Vector Light behind terminal card */}
            <div className="absolute -inset-1 rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Endless Skills Marquee Section (Unchanged, pinned at bottom) */}
      <div className="w-full pb-8 animate-fade-in animation-delay-600">
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Technologies I work with
        </p>
        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="inline-block px-2 py-4">
                <div className="flex items-center gap-2.5 px-4 py-2 bg-[#161617] border border border-dashed border-[#333333] rounded-xl hover:border-zinc-500 transition-colors cursor-default">
                  <span className="text-white">{skill.icon}</span>
                  <span className="text-white font-bold text-[15px]">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
