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

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute ">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-6  pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full stack problem solver
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Hello world !{" "}
                <span className="text-primary glow-text">Safi</span>
                <br />
                is a {"  "}
                <span className="font-serif italic font-normal text-white">
                  Full Stack developer.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Engineering the digital world — where ideas evolve into
                impactful web experiences
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <button
                className="flex items-center gap-2 px-3 sm:px-5 py-2.5 
          bg-[var(--color-surface)] border border-[var(--color-border)] 
          rounded-[var(--radius)] font-bold text-xs sm:text-sm hover:bg-black/20 transition-all"
              >
                <FileText size={18} />
                Resume / CV
              </button>

              {/* Primary Button: Get in touch */}
              <button
                className="flex items-center gap-2 px-3 sm:px-5 py-2.5 
          bg-[#F0F2F5] text-[#0F1418] rounded-[var(--radius)] 
          font-bold text-xs sm:text-sm hover:bg-white transition-all"
              >
                <Send size={18} />
                Get in touch
              </button>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/7saffix" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/shah-aziz-chowdhury-safi/",
                },
                { icon: Twitter, href: "https://x.com/_saffix_" },
              ].map((social, idx) => (
                <a
                  target="_blank"
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-sm mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-2 py-8">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {/* {skill} */}

                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 px-4 py-2 bg-[#161617] 
                       border border-dashed border-[#333333] rounded-xl 
                       hover:border-zinc-500 transition-colors cursor-default"
                    >
                      {/* Lucide Icon */}
                      <span className="text-white">{skill.icon}</span>
                      {/* Skill Name */}
                      <span className="text-white font-bold text-[15px]">
                        {skill.name}
                      </span>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
