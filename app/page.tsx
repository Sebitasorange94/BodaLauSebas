"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import InvitationCover from "@/components/InvitationCover";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import WeddingInfo from "@/components/WeddingInfo";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import Gifts from "@/components/Gifts";
import LocationMap from "@/components/LocationMap";
import GoldDivider from "@/components/GoldDivider";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  // Pantalla de carga: 1 segundo, con salida suave (fade)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Bloquear scroll mientras la portada esté cerrada
  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [opened]);

  const handleOpenInvitation = () => {
    // Volver arriba antes de abrir
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setOpened(true);
  };

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && !opened && (
        <InvitationCover
          onOpen={handleOpenInvitation}
          // La música arranca con el toque del sello (gesto del usuario),
          // así el navegador no la bloquea.
          onBeginOpen={() => setMusicOn(true)}
        />
      )}

      <main
        className={`
          transition-all
          duration-700
          ease-out
          ${opened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <Hero />
        <Story />
        <GoldDivider />
        <Countdown />
        <WeddingInfo />
        <GoldDivider />
        <DressCode />
        <RSVP />
        <GoldDivider />
        <Gifts />
        <LocationMap />

        <footer className="bg-cocoa py-12 text-center">
          <p className="font-title text-cream text-3xl md:text-4xl mb-3">
            Lau &amp; Sebas
          </p>
          <p className="text-cream/60 uppercase tracking-[5px] text-xs">
            20 · 02 · 2027
          </p>
          <p className="text-cream/40 mt-4 text-sm italic">
            Los esperamos con el corazón
          </p>
        </footer>
      </main>

      {opened && (
        <MusicPlayer
          playing={musicOn}
          onToggle={() => setMusicOn((v) => !v)}
        />
      )}
    </>
  );
}
