import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { Metadata } from 'next'
import { cn } from "@/lib/utils"
import {ClerkProvider} from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import Provider from './Provider'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metdata: Metadata={
  title: 'LiveDocs',
  description: 'LiveDocs is a documentation tool for developers',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <ClerkProvider appearance={{baseTheme:dark,variables : {colorPrimary: "#3371FF", fontSize: '16px'}}}>
    <html lang="en" suppressHydrationWarning>
     
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
      <Provider>
      {children}
      </Provider>
      </body>
    </html>
    </ClerkProvider>
  )
}
