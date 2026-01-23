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
          <div className="w-56 md:w-72">
            <Logo animationDelay={1} />
          </div>
        </div>
        <motion.h1
          className="mb-6 text-5xl md:text-7xl tracking-tight text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        >
          Oimo Technologies
        </motion.h1>
        <motion.p
          className="mb-8 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Oimo builds and sells software products and helps other teams do the same.
        </motion.p>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <ContactButton />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 flex-1 max-w-sm">
            <h3 className="text-lg font-medium text-[#E8E580] mb-4">Our Products</h3>
            <ul className="space-y-3 text-left">
              <li>
                <a href="https://conju.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <img src="https://www.conju.ai/favicon.ico" alt="" className="w-5 h-5 rounded" />
                  Conju.ai <span className="text-slate-500 text-sm">(acquired)</span>
                </a>
              </li>
              <li>
                <a href="https://aplusreviews.io" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <img src="https://aplusreviews.io/favicon.ico" alt="" className="w-5 h-5 rounded" />
                  A Plus Reviews
                </a>
              </li>
              <li>
                <a href="https://callquinn.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <img src="https://callquinn.com/favicon.ico" alt="" className="w-5 h-5 rounded" />
                  CallQuinn <span className="text-slate-500 text-sm">(in development)</span>
                </a>
              </li>
              <li>
                <a href="https://dreema.io" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <img src="https://dreema.io/favicon.ico" alt="" className="w-5 h-5 rounded" />
                  Dreema <span className="text-slate-500 text-sm">(in development)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 flex-1 max-w-sm">
            <h3 className="text-lg font-medium text-[#E8E580] mb-4">Teams We've Helped</h3>
            <ul className="space-y-3 text-left">
              <li>
                <a href="https://localbuild.ca" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <img src="https://localbuild.ca/favicon.ico" alt="" className="w-5 h-5 rounded" />
                  LocalBuild
                </a>
              </li>
              <li>
                <a href="https://deeppersonality.app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                  <img src="/logos/deeppersonality.svg" alt="" className="w-5 h-5" />
                  Deep Personality
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}