import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();

  const isImpact = location === "/impact-calculator";
  const isActive = (href: string) => location === href;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology" },
    { href: "/products", label: "Products" },
    { href: "/invest", label: "Invest" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm transform rotate-45" />
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
            BLACK DIAMOND
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "transition-colors " +
                (isActive(item.href) ? "text-white" : "text-white/60 hover:text-white")
              }
            >
              {item.label}
            </Link>
          ))}

          {/* Make Impact Calculator the primary, high-visibility CTA in the sticky header */}
          <Link
            href="/impact-calculator"
            className={
              "relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 " +
              (isImpact
                ? "bg-[#A8C3B1] text-black"
                : "bg-[#A8C3B1]/15 text-[#A8C3B1] border border-[#A8C3B1]/35 hover:bg-[#A8C3B1] hover:text-black")
            }
          >
            Impact Calculator
            {!isImpact && (
              <span className="ml-2 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-mono font-black tracking-wider text-white/70 border border-white/10">
                Try it
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent className="bg-black border-white/10">
                <div className="space-y-6 pt-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30">
                      Navigation
                    </p>
                    <div className="h-[1px] w-16 bg-white/10" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={
                          "rounded-sm px-3 py-2 text-sm font-medium border transition-colors " +
                          (isActive(item.href)
                            ? "bg-white/10 text-white border-white/20"
                            : "bg-transparent text-white/70 border-white/10 hover:bg-white/5 hover:text-white")
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/impact-calculator"
                    className={
                      "w-full inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 border " +
                      (isImpact
                        ? "bg-[#A8C3B1] text-black border-[#A8C3B1]"
                        : "bg-[#A8C3B1]/15 text-[#A8C3B1] border-[#A8C3B1]/35 hover:bg-[#A8C3B1] hover:text-black")
                    }
                  >
                    Impact Calculator
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Primary CTA */}
          <Link
            href="/impact-calculator"
            className={
              "px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 " +
              (isImpact
                ? "bg-[#A8C3B1] text-black"
                : "bg-white/5 hover:bg-[#A8C3B1] hover:text-black border border-white/10")
            }
          >
            Calculate Impact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}