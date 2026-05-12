import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: '45+ Dibujos para Colorear Bobbie Cup | Libros para Toda la Familia',
  description:
    'Adquiere ahora 45+ dibujos para colorear Bobbie Cup con temáticas variadas de la copa. Acceso de por vida, suporte por WhatsApp y garantía de 7 días.',
  
  // --- INÍCIO DAS TAGS OPEN GRAPH ---
  openGraph: {
    title: '45+ Dibujos para Colorear Bobbie Cup',
    description: 'Adquiere ahora 45+ dibujos para colorear Bobbie Cup con temáticas variadas de la copa. Acceso de por vida y garantía de 7 días.',
    url: 'https://zynk.digital', 
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobbie%20Cup_%20divers%C3%A3o%20e%20futebol-hKFl3isAZrqCOUVn0Z9uruDx0lK2gK.png', 
        width: 1200,
        height: 630,
        alt: 'Portada del libro Bobbie Cup Coloring Book con osito sosteniendo trofeo de la copa',
      },
    ],
  },
  // --- FIM DAS TAGS OPEN GRAPH ---
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}

        {/* CONFIGURAÇÃO UTMFY - RASTREIO ATUALIZADO */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6a0274459d325b28a4dac28d";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </body>
    </html>
  )
}
