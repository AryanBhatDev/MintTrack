"use client"

import * as React from "react"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
        <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        >
        {children}
        </NextThemesProvider>
    </SessionProvider>
  )
}
