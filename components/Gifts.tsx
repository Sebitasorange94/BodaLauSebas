// components/Gifts.tsx
import AnimatedSection from "./AnimatedSection";

export default function Gifts() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="max-w-3xl mx-auto text-center px-6">
        <AnimatedSection>
          <p className="uppercase tracking-[6px] text-sage mb-4 text-sm md:text-base">
            Lluvia de sobres
          </p>
          <h2 className="font-title text-4xl sm:text-5xl text-cocoa mb-10 md:mb-12">
            Tu presencia es nuestro mejor regalo
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 shadow-xl border border-linen">
            {/* Sobre */}
            <div className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-sand flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="w-8 h-8 md:w-10 md:h-10 text-gold"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <p className="text-ink leading-relaxed text-base md:text-lg mb-6">
              Si deseas tener un detalle con nosotros, agradeceremos una
              lluvia de sobres que nos acompañe en el inicio de esta nueva etapa.
            </p>

            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="h-px w-10 bg-gold/50" />
              <p className="text-taupe italic text-sm md:text-base">
                El día de la celebración encontrarás un cofre para tu sobre
              </p>
              <span className="h-px w-10 bg-gold/50" />
            </div>

            {/* Bre-B */}
            <p className="uppercase tracking-[4px] text-sage text-xs md:text-sm mb-6">
              O si prefieres, por Bre-B
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
              {[
                { name: "Lau", key: "318 477 7740", src: "/images/qr-lau.png" },
                { name: "Sebas", key: "@amigo1023937126", src: "/images/qr-sebas.jpeg" },
              ].map((p) => (
                <div key={p.name} className="flex flex-col items-center">
                  <p className="font-title text-xl text-cocoa mb-3">{p.name}</p>
                  <div className="w-40 sm:w-44 bg-sand/40 rounded-2xl p-3">
                    <img
                      src={p.src}
                      alt={`Código QR Bre-B de ${p.name}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-taupe text-sm mt-3">{p.key}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}