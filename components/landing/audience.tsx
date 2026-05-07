import { Users, GraduationCap, Heart, ChevronDown } from "lucide-react"

const audiences = [
  {
    icon: Users,
    title: "Familias",
    description:
      "Momentos de diversión y conexión entre padres e hijos, coloreando juntos los dibujos de Bobbie Cup.",
    color: "bg-[#3B82F6]",
  },
  {
    icon: GraduationCap,
    title: "Escuelas y Profesores",
    description:
      "Material complementario para clases más dinámicas y atractivas, con temáticas de la copa.",
    color: "bg-[#22c55e]",
  },
  {
    icon: Heart,
    title: "Regalo Creativo",
    description:
      "Sorprende a los niños con un regalo único y educativo que estimula la creatividad lejos de las pantallas.",
    color: "bg-[#f97316]",
  },
]

export function Audience() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="text-balance text-center text-3xl font-extrabold text-[#1e293b]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          ¿Para Quién es Bobbie Cup?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-[#64748b]">
          ¡Ideal para toda la familia, educadores y quienes buscan un regalo creativo y educativo!
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl bg-[#ffffff] p-8 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.color}`}
              >
                <item.icon className="h-7 w-7 text-[#ffffff]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-10 py-4 text-lg font-bold text-[#ffffff] shadow-lg transition-all hover:bg-[#16a34a] hover:shadow-xl"
          >
            QUIERO ASEGURAR EL MÍO
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
