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
    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        {/* <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white">
              {" "}
              one component at a time.
            </span>
          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I’m <strong>Shah Aziz Chowdhury Safi</strong> — a Software
              Engineer & Full‑Stack Problem Solver passionate about building
              real‑world applications from idea to deployment. I enjoy tackling
              technical challenges, designing efficient architectures, and
              writing clean, maintainable code that delivers real impact.
              Constantly expanding my skill set, I love creating solutions that
              are both practical and elegant.
            </p>

            <p>
              <strong>What I Do</strong> 💻
              <br />• Full‑Stack Development: Building web apps using modern
              technologies like JavaScript, TypeScript, Node.js, React, Next.js,
              and more.
              <br />• Backend & APIs: Designing scalable backend systems with
              Node.js, Prisma, PostgreSQL, MongoDB, Redis.
              <br />• Dev Tools & UI: Practical use of CSS, Tailwind CSS, HTML,
              and UI libraries for clean interfaces.
              <br />• Continuous Learning: Constantly exploring new tools and
              best practices to grow as a developer.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to create digital experiences that are not just
              functional, but truly delightful — products that users love to use
              and developers love to maintain."
            </p>
          </div>
        </div> */}

        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Engineering the modern web,
            <span className="font-serif italic font-normal text-white">
              {" "}
              from logic to layout.
            </span>
          </h2>

          <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200">
            <p className="leading-relaxed">
              I’m <strong>Shah Aziz Chowdhury Safi</strong> — a Software
              Engineer and Full‑Stack Architect driven by the art of turning
              complex problems into seamless digital reality. I specialize in
              engineering high-performance applications, prioritizing clean
              architecture and maintainable code that scales alongside the
              businesses it powers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <div className="space-y-2">
                  <h3 className="text-[var(--color-foreground)] font-bold flex items-center gap-2 tracking-tight">
                    <span className="text-sm">🎨</span> Frontend Excellence
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                    Building high-performance, responsive interfaces using{" "}
                    <strong className="text-[var(--color-primary)] font-bold">
                      React, Nextjs,Tailwind CSS
                    </strong>{" "}
                    for pixel-perfect, accessible user experiences.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-foreground font-semibold flex items-center gap-2">
                  <span className="text-xs">⚙️</span> Backend Architecture
                </h3>
                <p className="text-sm">
                  Engineering robust APIs and systems with{" "}
                  <strong className="text-[var(--color-primary)]">
                    Express,MongoDB,Mongoose and PostgreSQL,Prisma{" "}
                  </strong>
                  to ensure data integrity and speed.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "Code is like humor. When you have to explain it, it's bad. – Cory
              House"
            </p>
          </div>
        </div>

        {/* Right Column - Hilights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
