import { motion } from "framer-motion";
import ProductsSection from "@/components/sections/Products";

export default function Products() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="container px-6 mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30 mb-8 block">Certified Outputs</span>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
            ENGINEERED <br/> <span className="text-white/20">MATERIALS.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mt-12">
            From M-Sand to high-performance aggregates, every product from Black Diamond is tested for consistency, strength, and environmental compliance.
          </p>
        </motion.div>
      </div>
      <ProductsSection />
    </div>
  );
}
