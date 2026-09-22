// components/WeddingInfo.tsx
import AnimatedSection from "./AnimatedSection";

export default function WeddingInfo() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="uppercase tracking-[6px] text-sage mb-4 text-sm md:text-base">
            Nuestra Celebración
          </p>
          <h2 className="font-title text-4xl sm:text-5xl text-cocoa mb-10 md:mb-14">
            20 de febrero de 2027
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-linen">
              <p className="font-title text-3xl text-cocoa mb-2">3:00 PM</p>
              <p className="uppercase tracking-[3px] text-sage text-xs">
                Llegada de invitados
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-linen">
              <p className="font-title text-2xl text-cocoa mb-2 leading-snug">
                Hacienda Pilares del Rosal
              </p>
              <p className="uppercase tracking-[3px] text-sage text-xs">
                Km 3 · El Rosal, Cundinamarca
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
