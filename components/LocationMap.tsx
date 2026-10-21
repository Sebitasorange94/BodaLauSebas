// components/LocationMap.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const VENUE_NAME = "Hacienda Pilares del Rosal";
const VENUE_QUERY = encodeURIComponent(
  "Hacienda Pilares del Rosal, El Rosal, Cundinamarca, Colombia"
);
const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_QUERY}`;
const WAZE_URL = `https://waze.com/ul?q=${VENUE_QUERY}&navigate=yes`;

export default function LocationMap() {
  return (
    <section id="location" className="bg-sand py-20 pb-28 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
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

        <AnimatedSection delay={0.1}>
          <div className="rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl border border-linen">
            <iframe
              title="Ubicación del matrimonio"
              src={`https://www.google.com/maps?q=${VENUE_QUERY}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[240px] md:h-[420px]"
            />
          </div>
        </AnimatedSection>

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
                bg-blush hover:bg-blush-dark
                text-cocoa px-6 md:px-8 py-3 md:py-4
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
                bg-blush hover:bg-blush-dark
                text-cocoa px-6 md:px-8 py-3 md:py-4
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
