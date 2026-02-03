import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { 
      id: "01", 
      title: "Granite Waste Intake", 
      desc: "Inbound inspection",
      details: "Pre-feed staging",
      icon: "Inbound"
    },
    { 
      id: "02", 
      title: "Pre-Sorting", 
      desc: "Remove contaminants",
      details: "Grade by size",
      icon: "Sorting"
    },
    { 
      id: "03", 
      title: "Primary Crushing", 
      desc: "Jaw Crusher",
      details: "Output: 40-60 mm",
      icon: "Crushing"
    },
    { 
      id: "04", 
      title: "Crusher Screen", 
      desc: "Fine material",
      details: "Oversize",
      icon: "Screening"
    },
    { 
      id: "05", 
      title: "Screening", 
      desc: "Size cut control",
      details: "Recirculation gate",
      icon: "ScreeningV2"
    },
    { 
      id: "06", 
      title: "Sand Washing", 
      desc: "Primary",
      details: "Hydraulic classification",
      icon: "Washing"
    },
    { 
      id: "07", 
      title: "Vibrating Screen", 
      desc: "Tight size tolerance",
      details: "Split by grade",
      icon: "Vibration"
    },
    { 
      id: "08", 
      title: "Sand Washing", 
      desc: "Final",
      details: "Ultra-pure fines",
      icon: "FinalWashing"
    },
    { 
      id: "09", 
      title: "Saleable Products", 
      desc: "Certified grading",
      details: "Packed / bulk",
      icon: "Products"
    },
    { 
      id: "10", 
      title: "Filter Press", 
      desc: "Slurry dewatered",
      details: "Fines recovered",
      icon: "Filter"
    },
    { 
      id: "11", 
      title: "Water Recycling", 
      desc: "Closed Loop",
      details: "Settling + filtration",
      icon: "Recycle"
    },
    { 
      id: "12", 
      title: "Stockpile", 
      desc: "Batch tracking",
      details: "Dispatch queue",
      icon: "Stock"
    }
  ];

  return (
    <section id="process" className="py-32 bg-black relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-6 block text-white/40">System Architecture</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
              CLOSED-LOOP <br/> <span className="text-white/20">RECYCLING.</span>
            </h2>
          </div>
          <p className="text-xl font-light text-white/40 max-w-sm border-l border-white/10 pl-8 py-4">
            Our recovery system transforms granite waste into usable construction materials through engineering discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-colors shadow-2xl">
                   {step.id === "11" ? (
                     <div className="relative">
                       <div className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-1 h-1 bg-white rounded-full" />
                       </div>
                     </div>
                   ) : (
                     <div className="w-8 h-[2px] bg-white/20 relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40 -translate-y-1/2 group-hover:bg-white transition-colors" />
                     </div>
                   )}
                </div>
                <span className="text-[10px] font-mono font-bold text-white/20 group-hover:text-white/60 transition-colors">
                  {step.id}
                </span>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-sm font-display font-black tracking-widest text-white uppercase group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                  {step.desc}
                </p>
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-tighter italic">
                  {step.details}
                </p>
              </div>

              {/* Decorative flow indicators */}
              <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-white/5 group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/10 pt-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
              <div className="w-2 h-2 bg-white animate-ping z-10" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest font-bold text-white/40">System Status</p>
              <p className="text-xl font-display font-bold text-white tracking-widest">CLOSED LOOP ACTIVE</p>
            </div>
          </div>
          <div className="max-w-md text-right">
            <p className="text-xs font-mono uppercase tracking-widest text-white/20 leading-relaxed italic">
              OPERATING WITHIN CONTROLLED PARAMETERS TO ENSURE MAXIMUM MATERIAL CONSISTENCY AND ENVIRONMENTAL INTEGRITY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
