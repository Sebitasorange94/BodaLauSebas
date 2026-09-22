// components/InvitationCover.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface InvitationCoverProps {
  onOpen: () => void;
  /** Se dispara inmediatamente al tocar (gesto del usuario) — ideal para iniciar la música */
  onBeginOpen?: () => void;
}

export default function InvitationCover({
  onOpen,
  onBeginOpen,
}: InvitationCoverProps) {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    onBeginOpen?.();
    setClosing(true);
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: closing ? 0 : 1,
        scale: closing ? 1.05 : 1,
        filter: closing ? "blur(8px)" : "blur(0px)",
      }}
      transition={{
        duration: closing ? 1.1 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-[9999] overflow-hidden touch-none"
    >
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/cover-desktop.jpg"
          alt="Lau & Sebas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/cover-mobile.jpg"
          alt="Lau & Sebas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/5" />

      {/* Halo pulsante, alineado exactamente con el botón */}
      {!closing && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.75, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute left-1/2 bottom-[10%] md:bottom-[6%]
            -translate-x-1/2 w-32 h-32 md:w-40 md:h-40
            rounded-full bg-white/30 blur-xl pointer-events-none
          "
        />
      )}

      {/* Pista sutil para el invitado */}
      {!closing && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-[calc(10%+9rem)] md:bottom-[calc(6%+11rem)]
            text-white/90 uppercase tracking-[4px] text-[10px] md:text-xs
            pointer-events-none drop-shadow-md whitespace-nowrap
          "
        >

        </motion.p>
      )}

      <motion.button
        onClick={handleOpen}
        disabled={closing}
        aria-label="Abrir invitación"
        whileTap={{ scale: 0.92 }}
        animate={{
          scale: closing ? 0.85 : 1,
          opacity: closing ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="
          absolute left-1/2 bottom-[10%] md:bottom-[6%]
          -translate-x-1/2 w-32 h-32 md:w-40 md:h-40
          rounded-full cursor-pointer z-20
        "
      />
    </motion.div>
  );
}
