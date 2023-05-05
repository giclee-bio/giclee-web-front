'use client'
import { SessionProvider } from 'next-auth/react'

import type { Session } from 'next-auth'

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
