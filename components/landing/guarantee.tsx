import { ShieldCheck, Lock } from "lucide-react"

export function Guarantee() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-md px-4 text-center">
        {/* Shield icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#22c55e]">
          <ShieldCheck className="h-10 w-10 text-[#ffffff]" />
        </div>

        <h2
          className="text-2xl font-extrabold text-[#1e293b]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Garantía de 7 días
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#64748b]">
          Si no quedas satisfecho, te devolvemos tu dinero sin preguntas. Tu compra es 100%
          segura y protegida.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-[#64748b]">
            <ShieldCheck className="h-5 w-5 text-[#22c55e]" />
            <span>Pago Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#64748b]">
            <Lock className="h-5 w-5 text-[#22c55e]" />
            <span>Protegido por SSL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
