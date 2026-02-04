import { motion } from "framer-motion";
import Process from "@/components/sections/Process";

export default function Technology() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container px-6 mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30 mb-8 block">The Infrastructure</span>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
            ADVANCED <br/> <span className="text-white/20">RECOVERY.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mt-12">
            Our facility leverages state-of-the-art hydraulic classification and closed-loop water systems to ensure 100% material utilization and zero external discharge.
          </p>
        </motion.div>
      </div>
      <Process />
    </div>
  );
}
