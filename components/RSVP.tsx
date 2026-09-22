// components/RSVP.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

/*
  ── CONEXIÓN DIRECTA CON GOOGLE SHEETS (sin Forms) ──────────────────
  Las confirmaciones llegan directo a tu hoja de cálculo de Google.

  CÓMO CONFIGURARLO (5 minutos, una sola vez):
  1. Crea una hoja en https://sheets.google.com y en la fila 1 escribe
     los encabezados: Fecha | Nombre | Teléfono | Asistencia | Restricciones
  2. Menú "Extensiones" → "Apps Script". Borra lo que aparece y pega el
     script doPost que acompaña el proyecto (Claude te lo entregó junto
     a este archivo). Guarda.
  3. Botón azul "Implementar" → "Nueva implementación" → engranaje →
     "Aplicación web" → Ejecutar como: "Yo" → Quién tiene acceso:
     "Cualquier persona" → Implementar → autoriza los permisos.
  4. Copia la URL que termina en /exec y pégala aquí abajo. ¡Eso es todo!

  NOTA: si algún día editas el script, debes crear una "Nueva
  implementación" (o administrar implementaciones → editar → nueva
  versión) para que el cambio quede publicado.
*/
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyZHDXIKA5-SJE5xZlZ9tdqtS2_Lb8bmZljdyzN2WqezNjRQQWi3ccTnNfXaKAsyK8v/exec";

type Status = "idle" | "sending" | "sent";

export default function RSVP() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asiste, setAsiste] = useState<"Sí" | "No" | null>(null);
  const [restricciones, setRestricciones] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim() || !telefono.trim() || !asiste) {
      setError("Por favor completa tu nombre, teléfono y si nos acompañarás.");
      return;
    }

    setStatus("sending");

    const body = new FormData();
    body.append("nombre", nombre.trim());
    body.append("telefono", telefono.trim());
    body.append("asistencia", asiste);
    body.append("restricciones", restricciones.trim() || "Ninguna");

    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body });
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(
        "No pudimos enviar tu confirmación. Inténtalo de nuevo o escríbenos por WhatsApp."
      );
    }
  };

  const inputClass = `
    w-full bg-transparent border-b border-linen
    focus:border-sage outline-none
    py-3 text-cocoa placeholder:text-taupe/50
    transition-colors duration-300
  `;

  return (
    <section id="rsvp" className="bg-sand py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[6px] text-sage mb-4 text-sm md:text-base">
            Confirma tu asistencia
          </p>
          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-cocoa mb-6">
            ¿Nos acompañas?
          </h2>
          <p className="text-ink text-base md:text-lg">
            Tu presencia hará de este día algo inolvidable.
            <br className="hidden md:block" /> Por favor confírmanos antes del{" "}
            <span className="text-cocoa font-semibold">20 de enero de 2027</span>.
          </p>
        </AnimatedSection>

        {/* Nota de cupos, con mucho cariño */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="bg-white/70 border border-linen rounded-2xl px-6 py-5 text-center">
            <p className="text-taupe text-sm md:text-base leading-relaxed italic">
              Con mucho cariño hemos reservado los puestos indicados en el
              mensaje de tu invitación. Amamos a los más pequeños, pero este
              será un evento solo para adultos. Agradecemos de corazón tu
              comprensión. 🤍
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-10 md:p-14 shadow-xl border border-linen text-center"
            >
              <p className="text-4xl mb-4">🤍</p>
              <h3 className="font-title text-3xl md:text-4xl text-cocoa mb-4">
                ¡Gracias{asiste === "Sí" ? ", nos vemos pronto!" : "!"}
              </h3>
              <p className="text-ink">
                {asiste === "Sí"
                  ? "Recibimos tu confirmación. ¡Será un día maravilloso contigo!"
                  : "Recibimos tu respuesta. Te llevaremos en el corazón ese día."}
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 shadow-xl border border-linen space-y-7"
            >
              <div>
                <label
                  htmlFor="rsvp-nombre"
                  className="block uppercase tracking-[3px] text-xs text-sage mb-1"
                >
                  Nombre completo *
                </label>
                <input
                  id="rsvp-nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Escribe tu nombre y apellido"
                  className={inputClass}
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="rsvp-telefono"
                  className="block uppercase tracking-[3px] text-xs text-sage mb-1"
                >
                  Teléfono *
                </label>
                <input
                  id="rsvp-telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej: 300 123 4567"
                  className={inputClass}
                  autoComplete="tel"
                />
              </div>

              <div>
                <p className="uppercase tracking-[3px] text-xs text-sage mb-3">
                  ¿Nos acompañarás? *
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {(["Sí", "No"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAsiste(option)}
                      className={`
                        py-3.5 rounded-full border text-sm tracking-[2px] uppercase
                        transition-all duration-300
                        ${
                          asiste === option
                            ? "bg-sage text-white border-sage shadow-md"
                            : "bg-transparent text-taupe border-linen hover:border-sage"
                        }
                      `}
                    >
                      {option === "Sí" ? "¡Claro que sí!" : "No podré ir"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="rsvp-restricciones"
                  className="block uppercase tracking-[3px] text-xs text-sage mb-1"
                >
                  ¿Alguna restricción alimenticia?
                </label>
                <input
                  id="rsvp-restricciones"
                  type="text"
                  value={restricciones}
                  onChange={(e) => setRestricciones(e.target.value)}
                  placeholder="Vegetariano, sin gluten… (opcional)"
                  className={inputClass}
                />
              </div>

              {error && (
                <p className="text-blush-dark text-sm text-center">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full bg-cocoa hover:bg-taupe text-cream
                  py-4 rounded-full uppercase tracking-[3px] text-sm
                  shadow-lg transition-colors duration-300
                  disabled:opacity-60 disabled:cursor-wait
                "
              >
                {status === "sending" ? "Enviando…" : "Confirmar"}
              </motion.button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
