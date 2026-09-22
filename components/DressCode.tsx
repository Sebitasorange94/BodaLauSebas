// components/DressCode.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const damas = [
  { name: "Verde Salvia", color: "#AEB8A5" },
  { name: "Beige", color: "#DCCFC2" },
  { name: "Nude", color: "#EFE8DE" },
  { name: "Champaña", color: "#D8C8A8" },
];

const caballeros = [
  { name: "Negro", color: "#2F2F2F" },
  { name: "Gris Oscuro", color: "#4D5563" },
  { name: "Azul Noche", color: "#27364A" },
];

function ColorDots({ tones }: { tones: { name: string; color: string }[] }) {
  return (
    <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap">
      {tones.map((tone, i) => (
        <motion.div
          key={tone.name}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          title={tone.name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md ring-1 ring-black/5"
          style={{ backgroundColor: tone.color }}
        />
      ))}
    </div>
  );
}

export default function DressCode() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <p className="uppercase tracking-[8px] text-sage mb-4 text-sm md:text-base">
            Dress Code
          </p>
          <h2 className="font-title text-4xl sm:text-5xl md:text-7xl text-cocoa mb-6">
            Elegancia Formal
          </h2>
          <p className="text-ink text-base md:text-lg max-w-2xl mx-auto">
            Queremos compartir este día tan especial rodeados de elegancia,
            armonía y mucho amor.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <AnimatedSection delay={0.05}>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-xl border border-linen"
            >
              <h3 className="font-title text-3xl md:text-4xl text-cocoa mb-6 md:mb-8 text-center">
                Damas
              </h3>
              <p className="text-center text-ink mb-6 md:mb-8">
                Tonos sugeridos
              </p>

              <ColorDots tones={damas} />

              <ul className="space-y-2 md:space-y-3 text-ink text-center text-sm md:text-base">
                {damas.map((t) => (
                  <li key={t.name}>{t.name}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-xl border border-linen"
            >
              <h3 className="font-title text-3xl md:text-4xl text-cocoa mb-6 md:mb-8 text-center">
                Caballeros
              </h3>
              <p className="text-center text-ink mb-6 md:mb-8">
                Tonos sugeridos
              </p>

              <ColorDots tones={caballeros} />

              <ul className="space-y-2 md:space-y-3 text-ink text-center text-sm md:text-base">
                {caballeros.map((t) => (
                  <li key={t.name}>{t.name}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1} className="text-center mt-12 md:mt-16">
          <p className="text-cocoa italic text-base md:text-lg">
            Lo más importante será compartir este día con ustedes.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
