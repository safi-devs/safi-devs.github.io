import { Menu, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          💻safi<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-sm px-2 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to={"/contact"} className="hidden md:block">
            <button
              className="flex items-center gap-2 px-5 py-2.5 
                      bg-[#F0F2F5] text-[#0F1418] rounded-[var(--radius)] 
                      font-bold text-sm hover:bg-white transition-all"
            >
              <Send size={18} />
              Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link to={"/contact"} className="">
              <button
                className="flex items-center gap-2 px-5 py-2.5 
                      bg-[#F0F2F5] text-[#0F1418] rounded-[var(--radius)] 
                      font-bold text-sm hover:bg-white transition-all w-full"
              >
                <Send size={18} />
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
