// components/DressCode.tsx
"use client";

import Image from "next/image";
import Script from "next/script";
import AnimatedSection from "./AnimatedSection";

const PINTEREST_BOARD_URL =
  "https://co.pinterest.com/catapc1526/inspiraci%C3%B3n-dress-code-ls/";
const PINTEREST_INVITE_URL =
  "https://co.pinterest.com/catapc1526/inspiraci%C3%B3n-dress-code-ls/?invite_code=401227d907354a0c9855255f4fa200be&sender=472033742102251559";

function DressCodeGuide() {
  return (
    <div className="mx-auto mb-12 w-full max-w-5xl">
      <Image
        src="/images/dress-code/codigo-vestuario.jpg?v=20261019"
        alt="Guía de código de vestuario y colores elegidos por los novios"
        width={1748}
        height={1240}
        sizes="(min-width: 1152px) 1024px, calc(100vw - 48px)"
        loading="eager"
        className="h-auto w-full rounded-2xl border border-linen shadow-lg"
      />
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
            Formal Elegante
          </h2>
          <p className="text-ink text-base md:text-lg max-w-2xl mx-auto">
            Un día especial para celebrar con elegancia, personalidad y mucho
            amor.
          </p>
        </AnimatedSection>

        <DressCodeGuide />

        <AnimatedSection delay={0.1} className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <p className="uppercase tracking-[6px] text-sage mb-3 text-xs md:text-sm">
              Ideas para tu look
            </p>
            <h3 className="font-title text-3xl md:text-4xl text-cocoa">
              Inspiración en Pinterest
            </h3>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-5xl overflow-hidden rounded-[24px] border border-linen bg-white p-3 shadow-xl md:rounded-[32px] md:p-8">
            <div className="flex w-full min-w-0 justify-center [&_iframe]:!w-full [&_iframe]:!max-w-full [&_span[class*='embed_grid']]:!w-full [&_span[class*='embed_grid']]:!max-w-full">
              <a
                data-pin-do="embedBoard"
                data-pin-board-width="340"
                data-pin-scale-height="600"
                data-pin-scale-width="80"
                href={PINTEREST_BOARD_URL}
              />
            </div>
            <p className="mt-4 text-center text-sm text-ink">
              ¿No carga la vista previa?{" "}
              <a
                href={PINTEREST_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cocoa underline underline-offset-4 hover:text-sage"
              >
                Abrir el tablero en Pinterest
              </a>
            </p>
          </div>
          <Script
            src="https://assets.pinterest.com/js/pinit.js"
            strategy="lazyOnload"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="text-center mt-12 md:mt-16">
          <p className="text-cocoa italic text-base md:text-lg">
            Lo más importante será compartir este día con ustedes.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
