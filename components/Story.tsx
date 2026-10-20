// components/Story.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const timeline = [
  {
    year: "2023",
    title: "Todo comenzó sin esperarlo",
    description:
      "Gracias a una amiga en común comenzamos a hablar. Lo que empezó como una amistad nos permitió conocernos, compartir momentos especiales y acercarnos también a nuestras familias.",
    image: "/images/story/01.jpg?v=20261019",
  },
  {
    year: "2023",
    title: "Una tarde, un café y muchas risas",
    description:
      "Nuestra primera cita fue en Libre de Culpa. Entre café, conversaciones y risas descubrimos que había algo especial entre nosotros.",
    image: "/images/story/02.jpg?v=20261019",
  },
  {
    year: "2023",
    title: "Nuestro primer viaje",
    description:
      "Diciembre nos regaló nuestra primera aventura juntos. Sogamoso se convirtió en el escenario de recuerdos que todavía llevamos en el corazón.",
    image: "/images/story/03.jpg?v=20261019",
  },
  {
    year: "2024",
    title: "Comenzó oficialmente nuestra historia",
    description:
      "En febrero decidimos dar el siguiente paso y comenzar este camino como pareja.",
    image: "/images/story/04.jpg?v=20261019",
  },
  {
    year: "2025",
    title: "Explorando el mundo juntos",
    description:
      "Panamá y Brasil se convirtieron en nuevas páginas de nuestra historia y en recuerdos que siempre nos acompañarán.",
    image: "/images/story/05.jpg?v=20261019",
  },
  {
    year: "2026",
    title: "El viaje que cambió todo",
    description:
      "Europa nos regaló momentos inolvidables y el comienzo de una nueva etapa. Allí decidimos comprometernos y construir nuestro futuro juntos.",
    image: "/images/story/06.jpeg?v=20261019",
  },
];

const SWIPE_THRESHOLD = 60;
const AUTOPLAY_DELAY = 5000; // ms de inactividad antes de avanzar solo

export default function Story() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = timeline.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // newIndex fuera de rango se ignora en navegación manual (goTo),
  // pero el autoplay usa goToLoop para poder volver al inicio.
  const goTo = (newIndex: number) => {
    if (newIndex < 0 || newIndex > total - 1) return;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  // Reinicia el contador de inactividad cada vez que hay interacción
  // (manual o del propio autoplay) y programa el siguiente avance.
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setDirection(1);
      setIndex((current) => (current === total - 1 ? 0 : current + 1));
    }, AUTOPLAY_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, total]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(index + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(index - 1);
    }
  };

  const item = timeline[index];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-[#f2e8e2] py-20 md:bg-cream md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover grayscale opacity-25"
        >
          <source src="/videos/portada.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-cream/70 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <AnimatedSection className="mx-auto mb-14 max-w-3xl rounded-3xl bg-cream/60 px-4 py-5 text-center shadow-sm backdrop-blur-sm md:mb-16 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
          <p className="uppercase tracking-[6px] md:tracking-[8px] text-sage mb-4 text-sm md:text-base">
            Nuestra Historia
          </p>

          <h2 className="font-title text-4xl sm:text-5xl md:text-7xl text-cocoa">
            Un amor que comenzó sin esperarlo
          </h2>
        </AnimatedSection>

        {/* Carrusel horizontal */}
        <div className="relative">
          <div className="relative h-[520px] sm:h-[560px] md:h-[560px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 grid md:grid-cols-2 gap-8 md:gap-12 items-center cursor-grab active:cursor-grabbing"
              >
                {/* FOTO */}
                <div
                  className="
                    relative
                    h-[260px]
                    sm:h-[320px]
                    md:h-[440px]
                    overflow-hidden
                    rounded-[24px]
                    md:rounded-[32px]
                    bg-sand/60
                    shadow-2xl
                    select-none
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain pointer-events-none md:object-cover"
                  />
                </div>

                {/* TEXTO */}
                <div className="text-center md:text-left px-2">
                  <p className="text-sage font-semibold mb-3 md:mb-4 tracking-[3px] text-sm md:text-base">
                    {item.year}
                  </p>

                  <h3 className="font-title text-3xl sm:text-4xl md:text-5xl text-cocoa mb-4 md:mb-6">
                    {item.title}
                  </h3>

                  <p className="text-ink leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flechas (desktop) */}
          <button
            aria-label="Anterior"
            onClick={() => goTo(index - 1)}
            disabled={isFirst}
            className="
              hidden md:flex
              absolute left-[-56px] top-1/2 -translate-y-1/2
              w-12 h-12 items-center justify-center
              rounded-full border border-sage/40
              text-sage hover:bg-sage hover:text-cream
              transition-colors duration-300
              disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-sage
            "
          >
            ←
          </button>

          <button
            aria-label="Siguiente"
            onClick={() => goTo(index + 1)}
            disabled={isLast}
            className="
              hidden md:flex
              absolute right-[-56px] top-1/2 -translate-y-1/2
              w-12 h-12 items-center justify-center
              rounded-full border border-sage/40
              text-sage hover:bg-sage hover:text-cream
              transition-colors duration-300
              disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-sage
            "
          >
            →
          </button>
        </div>

        {/* Flechas (mobile) + puntos indicadores */}
        <div className="flex items-center justify-center gap-6 mt-8 md:mt-10">
          <button
            aria-label="Anterior"
            onClick={() => goTo(index - 1)}
            disabled={isFirst}
            className="md:hidden text-sage text-2xl disabled:opacity-30"
          >
            ←
          </button>

          <div className="flex gap-2">
            {timeline.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al momento ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-sage" : "w-2 bg-sage/30"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Siguiente"
            onClick={() => goTo(index + 1)}
            disabled={isLast}
            className="md:hidden text-sage text-2xl disabled:opacity-30"
          >
            →
          </button>
        </div>

        {/* Final */}
        <AnimatedSection
          className="relative isolate mt-20 overflow-hidden rounded-3xl bg-white/55 text-center shadow-lg md:mt-28 md:overflow-visible md:rounded-none md:bg-transparent md:shadow-none"
          delay={0.1}
        >
          <div className="pointer-events-none relative aspect-[9/16] w-full overflow-hidden bg-cocoa/5 md:hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="h-full w-full object-cover grayscale opacity-80"
            >
              <source src="/videos/nueva-aventura-movil.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10 px-4 py-8 md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-0">
            <p className="text-sage tracking-[6px] uppercase mb-4 text-sm md:text-base">
              2027
            </p>

            <h3 className="font-title text-4xl sm:text-5xl text-cocoa mb-6">
              Nuestra nueva aventura
            </h3>

            <p className="text-ink text-lg md:text-xl">
              Y ahora queremos compartir con ustedes el día más importante de nuestras vidas.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
