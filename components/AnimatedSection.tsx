// components/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Entrada de sección: rápida y elegante.
 * Sin blur (costoso en móviles) y con desplazamiento corto
 * para que el contenido aparezca ágil.
 */
export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  y = 28,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
