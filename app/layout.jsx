import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

import { Analytics } from "@vercel/analytics/react"
//Themeprovider
import { ThemeProvider } from "@/components/ThemeProvider";

//Font
import { Sen } from "next/font/google"
const SenFont = Sen({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  display: "swap"
})
export const metadata = {
  title: "Fala do Campus",
  description: "Site desenvolvido pelo Centro Acadêmico de Ciência da Computação para que você possa enviar sugestões ou reclamações.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={SenFont.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
            {children}    
          <Toaster/>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
