// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToStory = () => {
    const section = document.getElementById("story");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#2C2A28]">
      {/* svh = alto real del viewport en móvil (sin saltos por la barra del navegador).
          En desktop la foto completa siempre es visible gracias a object-contain. */}
      <div className="relative w-full h-[88svh] md:h-[92vh]">

        {/* Fondo desenfocado que rellena los lados */}
        <Image
          src="/images/portada.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover blur-2xl scale-110 opacity-40"
        />

        {/* Foto principal completa, centrada, sin recortar */}
        <Image
          src="/images/portada.jpg"
          alt="Lau y Sebas"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Degradado suave: oscurece solo arriba y abajo para que el texto
            se lea sin opacar la foto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/55" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-between text-center px-6 py-12 md:py-16"
        >
          {/* Bloque superior: fecha + nombres */}
          <div className="flex flex-col items-center">
            <p className="font-body uppercase tracking-[5px] md:tracking-[6px] text-white/85 mb-3 md:mb-4 text-xs md:text-sm drop-shadow-md">
              20 de febrero de 2027
            </p>

            <h1 className="font-title text-white text-5xl sm:text-6xl md:text-8xl drop-shadow-lg">
              Lau &amp; Sebas
            </h1>
          </div>

          {/* Bloque inferior: frase + botón + scroll */}
          <div className="flex flex-col items-center">
            <p className="font-body text-white/95 text-sm md:text-lg max-w-xl leading-relaxed drop-shadow-md mb-6 md:mb-8">
              Todo comenzó sin esperarlo,
              <br />
              el amor escribió el resto.
            </p>

            <motion.button
              onClick={scrollToStory}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                border border-white/50 hover:border-white/90 hover:bg-white/10
                transition-colors duration-300
                px-7 md:px-9 py-3 md:py-3.5
                rounded-full text-white/90 text-[11px] md:text-xs
                uppercase tracking-[3px]
                backdrop-blur-[2px]
              "
            >
              Descubre nuestra historia
            </motion.button>

            <motion.div
              onClick={scrollToStory}
              className="mt-6 md:mt-8 flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="relative w-px h-10 md:h-12 bg-white/30 overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="absolute w-px h-8 bg-white"
                />
              </div>
              <p className="text-white/60 text-[10px] uppercase tracking-[4px] group-hover:text-white transition-colors duration-300">
                Scroll
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
