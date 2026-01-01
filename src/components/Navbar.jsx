import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`py-4 transition-all duration-500 z-50`}>
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          💻safi<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded px-2 py-1 flex items-center gap-1">
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
          {/* <div className="hidden md:block">
            <Button size="sm">Contact Me</Button>
          </div> */}
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
        <div className="absolute w-full md:hidden glass-strong animate-fade-in">
          <div className=" mx-auto px-6 py-6 flex flex-col gap-4">
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

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
