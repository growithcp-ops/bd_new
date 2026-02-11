import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function About() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.32,
  });
  const cueOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const cueY = useTransform(scrollYProgress, [0, 0.18], [0, -16]);
  const markerY = useTransform(smoothProgress, [0, 1], [162, 0]);
  const sidebarLift = useTransform(scrollYProgress, [0, 1], [0, -22]);

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#1b1b1b]">
      <Navbar />
      <style>{`
        @keyframes blockFade {
          0% { opacity: 1; transform: translateY(0); }
          40% { opacity: 1; transform: translateY(0); }
          70% { opacity: 0.25; transform: translateY(6px); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        @keyframes sandRise {
          0% { opacity: 0; transform: translateY(14px); }
          35% { opacity: 0; transform: translateY(14px); }
          65% { opacity: 0.8; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes aggregateRise {
          0% { opacity: 0; transform: translateY(20px); }
          55% { opacity: 0; transform: translateY(20px); }
          85% { opacity: 0.9; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes conveyor {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes scrollNudge {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(10px); opacity: 0.25; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(46,111,87,0.32); }
          70% { box-shadow: 0 0 0 14px rgba(46,111,87,0); }
        }
      `}</style>

      <motion.div
        aria-hidden="true"
        className="fixed bottom-7 left-1/2 z-30 hidden -translate-x-1/2 md:flex"
        style={{ opacity: cueOpacity, y: cueY }}
      >
        <div className="flex items-center gap-3 rounded-full border border-[#6B6B6B]/20 bg-[#F7F7F7]/80 px-4 py-2 backdrop-blur-sm">
          <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#6B6B6B]">
            Scroll
          </span>
          <div className="h-7 w-4 rounded-full border border-[#6B6B6B]/45 p-1">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#2E6F57]"
              style={{ animation: "scrollNudge 1.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </motion.div>
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto xl:grid xl:grid-cols-[minmax(0,4fr)_320px] xl:gap-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl xl:max-w-none"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-[#6B6B6B] mb-8 block">Our Identity</span>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-12 text-[#2E6F57]">
              BLACK <br/> <span className="text-[#2E6F57]/30">DIAMOND.</span>
            </h1>
            
            <div className="space-y-12 text-xl md:text-2xl font-light text-[#6B6B6B] leading-relaxed">
            <p>
              BlackDiamond Granites operates as an industrial mineral recycling platform under Begur Sands Private Limited. The company works within the construction materials sector, producing manufactured sand and construction aggregates for infrastructure and building applications across Karnataka. Operations are carried out within a fully regulated framework. Statutory compliance governs sourcing, processing, and dispatch, with traceability integrated directly into daily operations rather than treated as a secondary control. The platform was developed to address a long-standing structural gap in the construction materials ecosystem. As infrastructure demand continues to grow, conventional sourcing practices have historically caused environmental and agricultural impact. BlackDiamond Granites was established to help correct this imbalance through controlled, recycling-based material processing.
            </p>

            <div className="pt-6">
              <div className="rounded-2xl border border-[#6B6B6B]/25 bg-[#EFEAE3] p-8 md:p-10">
                <div className="flex items-center justify-between gap-6 flex-wrap">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2E6F57]">
                      Material Transformation
                    </h2>
                    <p className="mt-3 text-base md:text-lg text-[#6B6B6B] max-w-2xl">
                      A controlled, industrial conversion from recovered granite to high-grade construction sand and aggregates.
                    </p>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-[0.35em] text-[#6B6B6B]">
                    Process Flow
                  </div>
                </div>

                <div className="mt-8 grid lg:grid-cols-[1.1fr_1.3fr] gap-10 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#6B6B6B]">
                      <span className="w-2 h-2 bg-[#2E6F57] rounded-full" />
                      Granite Recovery
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#6B6B6B]">
                      <span className="w-2 h-2 bg-[#6B6B6B] rounded-full" />
                      Controlled Processing
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#6B6B6B]">
                      <span className="w-2 h-2 bg-[#2E6F57] rounded-full" />
                      Sand + Aggregates
                    </div>
                  </div>

                  <div className="relative h-56 md:h-64 rounded-2xl border border-[#6B6B6B]/20 bg-[#F7F7F7] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        backgroundImage:
                          "linear-gradient(120deg, rgba(46,111,87,0.12), rgba(107,107,107,0.08), rgba(46,111,87,0.12))",
                        backgroundSize: "200% 100%",
                        animation: "conveyor 14s linear infinite",
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-[72%] max-w-md h-36 md:h-40">
                        <div
                          className="absolute inset-0 rounded-xl border border-[#6B6B6B]/30 bg-[#6E6A63]"
                          style={{ animation: "blockFade 16s ease-in-out infinite" }}
                        />
                        <div
                          className="absolute inset-0 rounded-xl border border-[#6B6B6B]/30"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 12% 30%, rgba(46,111,87,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(107,107,107,0.22), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))",
                            animation: "blockFade 16s ease-in-out infinite",
                          }}
                        />

                        <div
                          className="absolute inset-x-6 bottom-8 h-16 rounded-lg border border-[#6B6B6B]/25"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, rgba(107,107,107,0.25) 1px, transparent 1.5px), radial-gradient(circle, rgba(46,111,87,0.18) 1.2px, transparent 1.6px)",
                            backgroundSize: "10px 10px, 14px 14px",
                            backgroundPosition: "0 0, 6px 4px",
                            backgroundColor: "rgba(239,234,227,0.9)",
                            animation: "sandRise 16s ease-in-out infinite",
                          }}
                        />

                        <div
                          className="absolute inset-x-10 bottom-2 h-12 rounded-lg border border-[#6B6B6B]/25"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, rgba(107,107,107,0.35) 2.5px, transparent 3px), radial-gradient(circle, rgba(46,111,87,0.22) 2px, transparent 2.8px)",
                            backgroundSize: "18px 18px, 22px 22px",
                            backgroundPosition: "0 0, 8px 6px",
                            backgroundColor: "rgba(247,247,247,0.95)",
                            animation: "aggregateRise 16s ease-in-out infinite",
                          }}
                        />
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6 text-[10px] font-mono uppercase tracking-[0.35em] text-[#6B6B6B]">
                      <span>Granite</span>
                      <span>Sand</span>
                      <span>Aggregate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#EFEAE3] border border-[#6B6B6B]/30 rounded-2xl p-8 hover:border-[#2E6F57]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/70 border border-[#6B6B6B]/40 rounded-xl flex items-center justify-center group-hover:border-[#2E6F57]/50 transition-colors">
                    <svg className="w-6 h-6 text-[#6B6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B]">Our Mission</h3>
                    <div className="w-16 h-px bg-gradient-to-r from-[#2E6F57] to-transparent" />
                  </div>
                </div>
                <p className="text-base text-[#6B6B6B] leading-relaxed">
                  To eliminate granite waste by converting it into high-value construction materials, fostering a true circular economy in the building industry through sustainable resource recovery and environmental stewardship.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#F7F7F7] border border-[#6B6B6B]/30 rounded-2xl p-8 hover:border-[#2E6F57]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/70 border border-[#6B6B6B]/40 rounded-xl flex items-center justify-center group-hover:border-[#2E6F57]/50 transition-colors">
                    <svg className="w-6 h-6 text-[#6B6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B]">Our Vision</h3>
                    <div className="w-16 h-px bg-gradient-to-r from-[#2E6F57] to-transparent" />
                  </div>
                </div>
                <p className="text-base text-[#6B6B6B] leading-relaxed">
                  To set the gold standard for resource recovery in India, ensuring that growth does not come at the cost of environmental integrity by pioneering sustainable construction material solutions nationwide.
                </p>
              </motion.div>
            </div>

              <div className="pt-20">
                 <div className="p-12 bg-[#EFEAE3] border border-[#6B6B6B]/25 rounded-2xl">
                   <h2 className="text-3xl font-display font-bold mb-6 italic text-[#2E6F57]">"Waste is only waste if we fail to see its potential."</h2>
                   <p className="text-sm font-mono uppercase tracking-widest text-[#6B6B6B]">— Precision Granite Recovery Leadership</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            className="hidden xl:block"
            style={{ y: sidebarLift }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className="sticky top-32 space-y-5">
              <div className="rounded-2xl border border-[#6B6B6B]/25 bg-[#EFEAE3] p-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-[#6B6B6B]">
                  Scroll Assistant
                </p>
                <div className="mt-5 flex items-center gap-5">
                  <div className="relative h-44 w-[7px] overflow-hidden rounded-full bg-[#6B6B6B]/20">
                    <motion.div
                      className="absolute inset-x-0 bottom-0 h-full origin-bottom rounded-full bg-gradient-to-t from-[#2E6F57] via-[#2E6F57]/80 to-[#2E6F57]/30"
                      style={{ scaleY: smoothProgress }}
                    />
                    <motion.div
                      className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#2E6F57]/45 bg-[#F7F7F7]"
                      style={{ y: markerY, animation: "pulseGlow 2.4s ease-in-out infinite" }}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#2E6F57]">Reading Progress</p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      Smoothly tracks your movement through this page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#6B6B6B]/25 bg-[#F7F7F7] p-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-[#6B6B6B]">
                  Quick View
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[#6B6B6B]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E6F57]" />
                    Regulated granite recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E6F57]" />
                    Controlled material conversion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E6F57]" />
                    Circular supply for construction
                  </li>
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      </main>

      <footer className="py-32 bg-[#EFEAE3] text-[#1b1b1b] border-t border-[#6B6B6B]/20">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#2E6F57] rounded-sm transform rotate-45" />
                <span className="font-display font-bold text-lg tracking-tight text-[#2E6F57] uppercase">
                  BLACK DIAMOND
                </span>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#6B6B6B]/30 flex items-center justify-center hover:bg-[#2E6F57]/10 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4 text-[#6B6B6B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#6B6B6B]/30 flex items-center justify-center hover:bg-[#2E6F57]/10 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 text-[#6B6B6B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B] mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">M-Sand</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">P-Sand</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">Aggregates</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">Pavers</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B] mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">Technology</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">Impact</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2E6F57] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B] mb-6">Stay Updated</h3>
              <p className="text-sm text-[#6B6B6B] mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#6B6B6B]/30 rounded-sm text-sm text-[#1b1b1b] placeholder-[#6B6B6B]/70 focus:outline-none focus:border-[#2E6F57] transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-3 bg-[#2E6F57] text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#295f4b] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-[#6B6B6B]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                © {new Date().getFullYear()} Precision Granite Recovery
              </p>
              <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                <a href="#" className="hover:text-[#2E6F57] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#2E6F57] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#2E6F57] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
