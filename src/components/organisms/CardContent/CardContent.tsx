import Image from 'next/image'

import type { PlatformItems } from '@/components/atoms/PlatformItem'
import type { Account } from '@/components/pages/Card'

type Props = {
  account: Account
  items: PlatformItems[]
}

const CardContent: React.FC<Props> = ({ account, items }) => {
  return (
    <div className='h-[667px] w-[375px] rounded-lg bg-stone-800'>
      <div className='mt-16 flex flex-col items-center'>
        <Image
          alt={account.displayName}
          className='rounded-full'
          height='72'
          src={account.iconImageSrc}
          width='72'
        />
        <h2 className='mt-2 text-lg font-bold'>{account.displayName}</h2>
      </div>
      {items.map((item, key) => (
        <li className='mt-8 flex list-none items-center justify-center' key={key}>
          <Image alt={item.alt} className='rounded' height='36' src={item.src} width='36' />
          <p className='ml-4'>{item.platformAccountName}</p>
        </li>
      ))}
    </div>
  )
}

export default CardContent
