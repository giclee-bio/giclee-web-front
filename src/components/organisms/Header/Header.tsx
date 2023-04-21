import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/atoms/Button'

const Header = () => {
  return (
    <header className='h-20 px-4'>
      <div className='mx-auto flex h-full max-w-4xl items-center justify-between'>
        <Link className='mt-4' href='/'>
          <Image alt='giclee.io' height={57} src='/giclee.png' width={101} />
        </Link>
        <Button href='' isLink={true} type='light' width='half'>
          ログイン
        </Button>
      </div>
    </header>
  )
}

export default Header
