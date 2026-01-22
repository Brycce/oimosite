import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useAnimation } from "@/app/components/AnimationProvider";

export function Contact() {
  const { contentVisible } = useAnimation();

  return (
    <motion.section 
      className="px-6 py-8 bg-slate-800"
      initial={{ opacity: 0 }}
      animate={contentVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 text-sm">
          © 2026 Oimo Technologies Inc. All rights reserved.
        </p>
      </div>
    </motion.section>
  );
}