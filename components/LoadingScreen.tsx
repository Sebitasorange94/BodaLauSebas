// components/LoadingScreen.tsx
"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-sand flex flex-col items-center justify-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl sm:text-7xl md:text-9xl text-cocoa font-title mb-6 md:mb-8"
      >
        LS
      </motion.h1>

      {/* La barra se llena en sincronía con el segundo que dura la carga */}
      <div className="w-48 sm:w-64 h-1.5 bg-linen rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="h-full bg-sage rounded-full"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-6 text-taupe tracking-[4px] text-sm md:text-base"
      >
        Lau &amp; Sebas
      </motion.p>
    </motion.div>
  );
}
