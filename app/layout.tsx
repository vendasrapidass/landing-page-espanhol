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
    'Adquiere ahora 45+ dibujos para colorear Bobbie Cup con temáticas variadas de la copa. Acceso de por vida, soporte por WhatsApp y garantía de 7 días.',
  
  // --- INÍCIO DAS TAGS OPEN GRAPH (EXIGIDAS PELO SUPORTE DA META) ---
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

        {/* CÓDIGO DO PIXEL DA META */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '608663365673618');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=608663365673618&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
