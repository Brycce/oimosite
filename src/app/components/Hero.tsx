import Logo from "@/imports/Frame626318";
import { motion } from "motion/react";
import { useAnimation } from "@/app/components/AnimationProvider";
import { ContactButton } from "@/app/components/ContactButton";

export function Hero() {
  const { logoLoaded, contentVisible } = useAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <motion.div 
            className="w-56 md:w-72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <Logo />
          </motion.div>
        </div>
        <motion.h1 
          className="mb-6 text-5xl md:text-7xl tracking-tight text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          Oimo Technologies
        </motion.h1>
        <motion.p 
          className="mb-8 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          We build powerful SaaS tools for home service professionals and partner with ambitious teams to bring their app ideas to life.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        >
          <ContactButton />
        </motion.div>
      </div>
    </section>
  );
}