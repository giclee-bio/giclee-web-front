import Image from 'next/image'

import Button from '@/components/atoms/Button'
import LoginModal from '@/components/organisms/LoginModal'

const Top = () => {
  return (
    <div className='mt-32 flex items-center justify-center'>
      <Image alt='giclee.bio' height={300} src='/hero.svg' width={524} />

      <div className='ml-16'>
        <p className='flex flex-col font-bold'>
          <span className='text-5xl leading-loose text-primary'>Game IDを、集約せよ。</span>
          <span className='text-xl leading-loose'>
            多種多様なプラットフォームに散らばるGame IDを、一元管理。
          </span>
          <span className='text-xl leading-loose'>
            世界中で闘うゲーマーたちよ、これが真の力を引き出す鍵となる。
          </span>
        </p>
        <div className='mt-8 flex gap-8'>
          <LoginModal hero={true} />
          <Button>使い方</Button>
        </div>
      </div>
    </div>
  )
}

export default Top
