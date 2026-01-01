import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pedro Machado. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>

    // <div className="hero-content flex-col md:flex-row items-start">
    //   <div className="text-left">
    //     <div>
    //       <p className="my-3">Say Hello and Let’s Build Something Great!</p>
    //       <p>
    //         I’m available for remote, onsite, and freelance opportunities.
    //         However, if you have other request or question, don’t hesitate to
    //         contact me
    //       </p>
    //     </div>

    //     {/* contact box */}
    //     <div className="border border-gray-700 w-64 my-8 p-2 leading-9 rounded-md">
    //       <h1 className="font-bold">Message me here</h1>
    //       <a href="" className="flex items-center">
    //         <p className="ml-2">+8801310756290</p>
    //       </a>
    //       <a className="flex items-center">
    //         <p className="ml-2">7saffix@gmail.com</p>
    //       </a>
    //     </div>
    //   </div>

    //   <div className="card w-full md:max-w-md">
    //     <form className="card-body p-0">
    //       <div className="form-control">
    //         <input
    //           type="text"
    //           placeholder="Name"
    //           className="input input-bordered"
    //           required
    //         />
    //       </div>
    //       <div className="form-control">
    //         <input
    //           type="email"
    //           placeholder="Email"
    //           className="input input-bordered"
    //           required
    //         />
    //       </div>
    //       <div className="form-control">
    //         <textarea
    //           placeholder="Message"
    //           className="input input-bordered h-[150px]"
    //           required
    //         />
    //       </div>
    //       <div className="form-control mt-6">
    //         <button className="btn">Let’s work together</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Footer;
