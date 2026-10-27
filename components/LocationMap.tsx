// components/LocationMap.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const MAP_REVEAL_DELAY_MS = 1200;
const MAP_FADE_DURATION_SECONDS = 6;
const VENUE_NAME = "Hacienda Pilares del Rosal";
const VENUE_QUERY = encodeURIComponent(
  "Hacienda Pilares del Rosal, El Rosal, Cundinamarca, Colombia"
);
const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_QUERY}`;
const WAZE_URL = `https://waze.com/ul?q=${VENUE_QUERY}&navigate=yes`;

export default function LocationMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSectionVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !isSectionVisible) return;

    const timer = setTimeout(() => setShowMap(true), MAP_REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isMapLoaded, isSectionVisible]);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative isolate overflow-hidden bg-sand py-20 pb-28 md:py-28"
    >
      <Image
        src="/images/Location.jpg?v=20261026"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-center opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-sand/55"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[6px] md:tracking-[8px] text-sage mb-4 text-sm md:text-base">
            Ubicación
          </p>
          <h2 className="font-title text-3xl sm:text-4xl md:text-6xl text-cocoa">
            {VENUE_NAME}
          </h2>
          <p className="text-ink mt-4 text-sm md:text-lg">
            Kilómetro 3 · El Rosal, Cundinamarca
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.985 }}
          animate={
            showMap
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 16, scale: 0.985 }
          }
          transition={{
            duration: MAP_FADE_DURATION_SECONDS,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden={!showMap}
          className={showMap ? undefined : "pointer-events-none"}
        >
          <div className="rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl border border-linen">
            <iframe
              title="Ubicación del matrimonio"
              src={`https://www.google.com/maps?q=${VENUE_QUERY}&output=embed`}
              onLoad={() => setIsMapLoaded(true)}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[240px] md:h-[420px]"
            />
          </div>
        </motion.div>

        <div className="relative z-10 mt-10 flex flex-col items-center gap-4 overflow-visible pb-2 md:mt-8">
          <p className="text-ink text-sm md:text-base">
            Cómo llegar con:
          </p>
          <div className="mx-2 flex flex-wrap justify-center gap-3 overflow-visible md:mx-0 md:gap-4">
            <motion.a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex min-h-12 items-center gap-2
                bg-berry hover:bg-berry-dark
                text-cream px-6 md:px-8 py-3 md:py-4
                rounded-full shadow-xl
                transition-colors duration-300
                text-sm md:text-base tracking-wide
              "
            >
              📍 Google Maps
            </motion.a>
            <motion.a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex min-h-12 items-center gap-2
                bg-berry hover:bg-berry-dark
                text-cream px-6 md:px-8 py-3 md:py-4
                rounded-full shadow-xl
                transition-colors duration-300
                text-sm md:text-base tracking-wide
              "
            >
              🚙 Waze
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
