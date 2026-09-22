// components/LocationMap.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const VENUE_NAME = "Hacienda Pilares del Rosal";
const VENUE_QUERY = encodeURIComponent(
  "Hacienda Pilares del Rosal, El Rosal, Cundinamarca, Colombia"
);

export default function LocationMap() {
  return (
    <section className="bg-sand py-20 md:py-28">
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

          <div className="flex justify-center mt-6 md:mt-8">
            <motion.a
              href={`https://www.google.com/maps/dir/?api=1&destination=${VENUE_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center gap-2
                bg-blush hover:bg-blush-dark
                text-white px-6 md:px-8 py-3 md:py-4
                rounded-full shadow-xl
                transition-colors duration-300
                text-sm md:text-base tracking-wide
              "
            >
              📍 Cómo llegar
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
