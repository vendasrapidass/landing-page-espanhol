"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo recibo los libros?",
    answer:
      "Luego de la confirmación del pago, recibes acceso inmediato por e-mail y WhatsApp. ¡Los libros están en formato PDF, listos para imprimir cuantas veces quieras!",
  },
  {
    question: "¿Puedo imprimir cuantas veces quiera?",
    answer:
      "¡Sí! El acceso es de por vida y puedes imprimir cuantas veces quieras. Ideal para usar con toda la familia e incluso en clase.",
  },
  {
    question: "¿Cuál es el rango de edad recomendado?",
    answer:
      "Los dibujos son ideales para niños de 3 a 12 años, ¡pero a los adultos también les encanta colorear! Tenemos dibujos con diferentes niveles de detalles.",
  },
  {
    question: "¿Cómo funciona el bono mensual?",
    answer:
      "Quienes adquieren el Paquete Premium reciben acceso al Mega Pack de expansión con +100 dibujos extra de Bobbie Cup, además de todos los otros bonos listados en la oferta.",
  },
]

export function FAQ() {
  return (
    <section className="bg-[#ffffff] py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2
          className="text-balance text-center text-3xl font-extrabold text-[#1e293b]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Preguntas Frecuentes
        </h2>

        <div className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#ffffff] px-5"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-bold text-[#1e293b] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-[#64748b]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-10 py-4 text-lg font-bold text-[#ffffff] shadow-lg transition-all hover:bg-[#16a34a] hover:shadow-xl"
          >
            RESOLVÍ MIS DUDAS, QUIERO COMPRAR
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-[#e2e8f0] pt-6 text-center">
        <p className="text-xs text-[#94a3b8]">
          {"© 2026 Libros de Colorear Bobbie Cup. Todos los derechos reservados."}
        </p>
      </div>
    </section>
  )
}
