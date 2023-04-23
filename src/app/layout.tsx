import '@/styles/tailwind.css'

export const metadata = {
  description: 'Game platform ID in bio.',
  title: 'giclee.bio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='bg-base text-white'>{children}</body>
    </html>
  )
}
