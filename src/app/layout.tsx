import '@/styles/tailwind.css'
import Contents from '@/components/organisms/Contents'
import Header from '@/components/organisms/Header'

export const metadata = {
  description: 'Game platform ID in bio.',
  title: 'giclee.bio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='bg-base text-white'>
        <Header />
        <main>
          <Contents>{children}</Contents>
        </main>
      </body>
    </html>
  )
}
