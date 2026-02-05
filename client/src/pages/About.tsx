import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30 mb-8 block">Our Identity</span>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-12">
              BLACK <br/> <span className="text-white/20">DIAMOND.</span>
            </h1>
            
            <div className="space-y-12 text-xl md:text-2xl font-light text-white/80 leading-relaxed">
            <p>
              BlackDiamond Granites operates as an industrial mineral recycling platform under Begur Sands Private Limited. The company works within the construction materials sector, producing manufactured sand and construction aggregates for infrastructure and building applications across Karnataka. Operations are carried out within a fully regulated framework. Statutory compliance governs sourcing, processing, and dispatch, with traceability integrated directly into daily operations rather than treated as a secondary control. The platform was developed to address a long-standing structural gap in the construction materials ecosystem. As infrastructure demand continues to grow, conventional sourcing practices have historically caused environmental and agricultural impact. BlackDiamond Granites was established to help correct this imbalance through controlled, recycling-based material processing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/60">Our Mission</h3>
                    <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                  </div>
                </div>
                <p className="text-base text-white/80 leading-relaxed">
                  To eliminate granite waste by converting it into high-value construction materials, fostering a true circular economy in the building industry through sustainable resource recovery and environmental stewardship.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/60">Our Vision</h3>
                    <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
                  </div>
                </div>
                <p className="text-base text-white/80 leading-relaxed">
                  To set the gold standard for resource recovery in India, ensuring that growth does not come at the cost of environmental integrity by pioneering sustainable construction material solutions nationwide.
                </p>
              </motion.div>
            </div>

              <div className="pt-20">
                 <div className="p-12 bg-zinc-900 border border-white/5 rounded-2xl">
                   <h2 className="text-3xl font-display font-bold mb-6 italic">"Waste is only waste if we fail to see its potential."</h2>
                   <p className="text-sm font-mono uppercase tracking-widest text-white/20">— Precision Granite Recovery Leadership</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-32 bg-black text-white border-t border-white/10">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-white rounded-sm transform rotate-45" />
                <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
                  BLACK DIAMOND
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">M-Sand</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">P-Sand</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Aggregates</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pavers</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Stay Updated</h3>
              <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                © {new Date().getFullYear()} Precision Granite Recovery
              </p>
              <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-white/40">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
