// components/Countdown.tsx
"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const WEDDING_DATE = new Date("2027-02-20T15:00:00-05:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTimeLeft(): TimeLeft {
  const difference = WEDDING_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    done: false,
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Cálculo inmediato para no mostrar ceros el primer segundo
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-cream py-20 md:py-24 text-center">
      <AnimatedSection>
        <p className="uppercase tracking-[6px] text-sage mb-4 text-sm md:text-base">
          Falta poco
        </p>

        <h2 className="font-title text-4xl sm:text-5xl text-cocoa mb-10 md:mb-14">
          Nuestro Gran Día
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        {timeLeft?.done ? (
          <p className="font-title text-3xl md:text-5xl text-cocoa px-6">
            ¡Llegó el gran día! 🤍
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4 md:px-6">
            <Card value={timeLeft?.days} label="Días" />
            <Card value={timeLeft?.hours} label="Horas" />
            <Card value={timeLeft?.minutes} label="Minutos" />
            <Card value={timeLeft?.seconds} label="Segundos" />
          </div>
        )}
      </AnimatedSection>
    </section>
  );
}

function Card({ value, label }: { value?: number; label: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-linen">
      <h3 className="font-title text-4xl md:text-5xl text-cocoa tabular-nums">
        {value !== undefined ? String(value).padStart(2, "0") : "—"}
      </h3>

      <p className="mt-2 text-taupe uppercase tracking-[2px] text-xs md:text-sm">
        {label}
      </p>
    </div>
  );
}
