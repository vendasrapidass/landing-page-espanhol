import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Carolina M.",
    text: "¡A mis hijos les encantaron los dibujos de Bobbie Cup! Estuvieron horas coloreando, nunca los vi tan concentrados. ¡Material de altísima calidad!",
    stars: 5,
  },
  {
    name: "Fernanda Silva",
    text: "¡Lo compré para mi hija y quedó encantada! Los dibujos son hermosos y bien detallados. Ya lo imprimí varias veces, ¡vale mucho la pena!",
    stars: 5,
  },
  {
    name: "Juliana Rocha",
    text: "¡Regalo perfecto para mis sobrinos! Les encanta el fútbol y se volvieron locos con Bobbie. ¡Lo recomiendo muchísimo!",
    stars: 5,
  },
  {
    name: "Patricia Almeida",
    text: "¡Lo usé en la escuela y los niños participaron muchísimo! Excelente material para trabajar la motricidad y la creatividad.",
    stars: 5,
  },
  {
    name: "Camila Ferreira",
    text: "Pensé que sería simple, pero me impresionó la calidad de los dibujos. ¡A mi hijo de 5 años le encanta colorear a Bobbie!",
    stars: 5,
  },
  {
    name: "Renata Oliveira",
    text: "¡La mejor compra que he hecho! El soporte por WhatsApp es súper rápido y los dibujos son increíbles. Todas las semanas imprimo nuevos para mi hijo.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* 5 Stars */}
        <div className="mb-4 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-7 w-7 fill-[#facc15] text-[#facc15]"
            />
          ))}
        </div>

        <h2
          className="text-balance text-center text-3xl font-extrabold text-[#1e293b]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-[#64748b]">
          ¡Más de 500 familias ya lo han aprobado!
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-[#ffffff] p-6 shadow-md"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#facc15] text-[#facc15]"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[#475569]">
                {`"${t.text}"`}
              </p>
              <p className="mt-4 text-sm font-bold text-[#1e293b]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
