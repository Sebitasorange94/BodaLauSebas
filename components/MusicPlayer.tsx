// components/MusicPlayer.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/*
  ── CANCIÓN DE LA BODA ──────────────────────────────────
  Coloca tu archivo mp3 en:  public/audio/cancion.mp3
  (o cambia la ruta aquí abajo)
*/
const SONG_SRC = "/audio/ENERO.mp3";

interface MusicPlayerProps {
  playing: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ playing, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.volume = 0.55;
      audio.play().catch(() => {
        // Si el navegador bloquea el autoplay, dejamos el botón en pausa
        // para que el invitado la active con un toque.
        onToggle();
      });
    } else {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src={SONG_SRC} loop preload="auto" />

      <motion.button
        onClick={onToggle}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="
          fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999]
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-cocoa/90 backdrop-blur-sm shadow-xl
          flex items-center justify-center
          border border-white/20
        "
      >
        {playing ? (
          /* Ecualizador animado mientras suena */
          <span className="flex items-end gap-[3px] h-4">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ height: ["30%", "100%", "45%", "85%", "30%"] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.18,
                  ease: "easeInOut",
                }}
                className="w-[3px] bg-cream rounded-full"
              />
            ))}
          </span>
        ) : (
          /* Nota musical en pausa */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 text-cream/80"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
