import '@/styles/tailwind.css'

export const metadata = {
  title: 'giclee.bio',
  description: 'Game platform ID in bio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='bg-main text-white'>{children}</body>
    </html>
  )
}
