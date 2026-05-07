import { Hero } from "@/components/landing/hero"
import { Audience } from "@/components/landing/audience"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Guarantee } from "@/components/landing/guarantee"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Audience />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
    </main>
  )
}
