"use client"

import { ChevronDown } from "lucide-react"

export function ProductShowcase() {
  const books = [
    { 
      title: "Bobbie Cup en Acción", 
      desc: "Innumerables mascotas para colorear y divertirse", 
      image: "/foto1.jpg.png" 
    },
    { 
      title: "Bobbie en el Estadio", 
      desc: "Escenarios de estadios e hinchadas para colorear", 
      image: "/foto2.jpg.png" 
    },
    { 
      title: "Bobbie y Amigos", 
      desc: "La mascota y sus amigos en diferentes escenarios", 
      image: "/foto3.jpg.png" 
    },
    { 
      title: "¡Convocatoria de la banda!", 
      desc: "Llama a la familia y amigos para divertirse juntos", 
      image: "/foto4.jpg.png" 
    }
  ];

  return (
    <section className="bg-white py-16" style={{ overflow: 'hidden' }}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-balance text-center text-3xl font-extrabold text-[#1e293b]">
          Conoce Nuestros Libros de Colorear
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-[#64748b]">
          Libros únicos con dibujos de Bobbie Cup para momentos de diversión y creatividad
        </p>

        {/* Container de Scroll - Estabilizado e Fluido */}
        <div className="relative mt-10">
          <div 
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'none',
              overscrollBehaviorX: 'contain'
            }}
          >
            {books.map((book) => (
              <div
                key={book.title}
                className="flex-shrink-0 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] shadow-sm"
                style={{ 
                  width: '280px', 
                  transform: 'translateZ(0)',
                  transition: 'none' 
                }}
              >
                {/* Moldura da Imagem - Proporção Quadrada Sem Bordas */}
                <div 
                  className="aspect-square w-full bg-white rounded-t-2xl border-b border-[#e2e8f0] overflow-hidden relative"
                >
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                    style={{ 
                      pointerEvents: 'none',
                      display: 'block'
                    }}
                    loading="eager"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-[#1e293b] text-base">{book.title}</h3>
                  <p className="mt-1 text-sm text-[#64748b]">{book.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-10 py-4 text-lg font-bold text-white shadow-lg active:scale-95 transition-transform"
          >
            QUIERO LOS LIBROS AHORA
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}