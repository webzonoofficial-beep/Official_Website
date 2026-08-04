"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#04060A] flex flex-col items-center justify-center">
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative flex items-center justify-center"
      >
        <Image 
          src="/assets/logo.png"
          alt="WEBZONO Loading"
          width={180}
          height={60}
          className="relative z-10 h-[50px] w-auto md:h-[60px] object-contain block opacity-100"
          priority
        />
      </motion.div>
    </div>
  );
}
