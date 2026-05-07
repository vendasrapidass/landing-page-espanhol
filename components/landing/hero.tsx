"use client"

import { ShieldCheck, Star, ChevronDown } from "lucide-react"

export function Hero() {

  return (
    <section className="relative overflow-hidden bg-[#3B82F6] pb-12 pt-4">
      {/* Protected badge */}
      <div className="mx-auto mb-6 flex max-w-md flex-wrap items-center justify-center gap-3 px-4">
        <div className="flex items-center gap-2 rounded-full bg-[#ffffff]/20 px-4 py-2 text-xs font-semibold text-[#ffffff]">
          <ShieldCheck className="h-4 w-4" />
          <span>Compra 100% Segura</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#ffffff]/20 px-4 py-2 text-xs font-semibold text-[#ffffff]">
          <Star className="h-4 w-4 fill-[#facc15] text-[#facc15]" />
          <span>+500 vendidos</span>
        </div>
      </div>

      {/* Product image placeholder area */}
      <div className="mx-auto mb-8 flex max-w-sm justify-center px-4">
        <div className="animate-float relative">
          <div className="overflow-hidden rounded-2xl border-4 border-[#ffffff]/30 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobbie%20Cup_%20divers%C3%A3o%20e%20futebol-hKFl3isAZrqCOUVn0Z9uruDx0lK2gK.png"
              alt="Portada del libro Bobbie Cup Coloring Book con osito sosteniendo trofeo de la copa"
              className="h-auto w-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="mx-auto max-w-lg px-4 text-center">
        <h1 className="text-balance text-4xl font-extrabold leading-tight text-[#ffffff]" style={{ fontFamily: "var(--font-poppins)" }}>
          45+ Dibujos para Colorear{" "}
          <span className="text-[#facc15]">Bobbie Cup</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-[#ffffff]/90">
          Transforma momentos especiales con tu familia, estimulando la creatividad y
          la diversión con dibujos exclusivos de la mascota de la copa.
        </p>

        {/* Audience tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-[#ffffff] px-5 py-2 text-sm font-semibold text-[#1e293b]">
            <span className="text-base">{"⚽"}</span> Familia
          </span>
          <span className="flex items-center gap-2 rounded-full bg-[#ffffff] px-5 py-2 text-sm font-semibold text-[#1e293b]">
            <span className="text-base">{"🏫"}</span> Escuela
          </span>
          <span className="flex items-center gap-2 rounded-full bg-[#ffffff] px-5 py-2 text-sm font-semibold text-[#1e293b]">
            <span className="text-base">{"🎨"}</span> Diversión
          </span>
        </div>

        {/* CTA */}
        <a
          href="#oferta"
          className="animate-pulse-scale mt-8 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-10 py-4 text-lg font-bold text-[#ffffff] shadow-lg transition-all hover:bg-[#16a34a] hover:shadow-xl"
        >
          QUIERO COMPRAR AHORA
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
