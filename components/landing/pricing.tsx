"use client"

import { useState, useEffect } from "react"
import { Flame } from "lucide-react"

export function Pricing() {
  // Timer for 15 minutes
  const [timeLeft, setTimeLeft] = useState(15 * 60)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <section id="oferta" className="bg-[#ffffff] py-16">
      <div className="mx-auto max-w-md px-4">
        {/* Limited offer badge */}
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full bg-[#ef4444] px-6 py-2 text-sm font-bold text-[#ffffff]">
            <Flame className="h-5 w-5" />
            OFERTA POR TIEMPO LIMITADO
          </div>
        </div>

        {/* Main Offer Container (Orange) */}
        <div className="relative overflow-hidden rounded-3xl border-4 border-[#f97316] bg-[#f97316] shadow-2xl">
          {/* Header */}
          <div className="bg-[#f97316] px-6 py-4 text-center">
            <span className="text-lg font-black text-[#ffffff] tracking-wider">
              ¡OFERTA ÚNICA DE LANZAMIENTO!
            </span>
          </div>

          <div className="bg-[#ffffff] px-6 pb-8 pt-6 text-center">
            {/* Price with Anchoring */}
            <div className="mb-1 text-lg font-semibold text-[#94a3b8] line-through">
              De $14.90 USD
            </div>
            <div
              className="text-5xl font-black text-[#1e293b]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              por solo $7.90 USD
            </div>
            <p className="mt-2 text-sm font-bold text-[#10b981]">
              Pago único • Acceso de por vida
            </p>

            {/* Countdown Timer */}
            <div className="my-8 rounded-2xl bg-[#fff7ed] py-5 px-2 border border-[#ffedd5]">
              <p className="mb-3 text-sm font-extrabold text-[#ea580c] uppercase tracking-wide">
                Esta oferta expira en:
              </p>
              <div className="flex justify-center items-center gap-2 text-3xl font-black text-[#1e293b]" style={{ fontFamily: "var(--font-poppins)" }}>
                <div className="rounded-xl bg-[#ffffff] px-4 py-3 shadow-md border border-[#fed7aa]">
                  00
                </div>
                <span className="text-[#ea580c] mb-1">:</span>
                <div className="rounded-xl bg-[#ffffff] px-4 py-3 shadow-md border border-[#fed7aa]">
                  {minutes.toString().padStart(2, "0")}
                </div>
                <span className="text-[#ea580c] mb-1">:</span>
                <div className="rounded-xl bg-[#ffffff] px-4 py-3 shadow-md border border-[#fed7aa]">
                  {seconds.toString().padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 text-left px-1">
              {[
                "45+ Páginas de dibujos exclusivos de Bobbie Cup",
                "Temática especial de la Copa para máxima diversión",
                "Tu colección siempre al día con lanzamientos y sorpresas exclusivas",
                "Garantía total de satisfacción por 7 días",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl leading-none">✅</span>
                  <span className="text-sm font-bold text-[#334155] leading-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Purchase Button */}
            <a
              href="https://pay.hotmart.com/V105722951L"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-scale mt-10 block w-full rounded-full bg-[#22c55e] py-5 text-center text-lg font-black text-[#ffffff] shadow-xl transition-all hover:bg-[#16a34a] hover:shadow-2xl"
            >
              ¡SÍ! QUIERO ASEGURAR MI ACCESO <span className="ml-1 font-sans">→</span>
            </a>

            {/* Footer Text */}
            <p className="mt-5 text-xs font-bold text-[#64748b]">
              Compra 100% segura • Acceso inmediato a tu correo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
