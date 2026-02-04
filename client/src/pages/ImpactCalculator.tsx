import { motion } from "framer-motion";

export default function ImpactCalculator() {
  return (
    <div className="pt-32 pb-20 bg-black text-white min-h-screen">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30 mb-8 block">Metrics for Change</span>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-12">
            IMPACT <br/> <span className="text-white/20">CALCULATOR.</span>
          </h1>
          <div className="p-20 bg-zinc-900 border border-white/5 rounded-3xl text-center">
             <p className="text-xl font-display font-bold text-white/40 uppercase tracking-widest">Interactive Calculator Coming Soon</p>
             <p className="text-sm font-mono text-white/20 mt-4 italic">Quantifying the environmental offset of every ton recovered.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
