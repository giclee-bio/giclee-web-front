import Image from 'next/image'

type Props = {
  alt: string
  caption: string
  src: string
}

const PlatformItem: React.FC<Props> = ({ alt, caption, src }) => {
  return (
    <div className='w-20'>
      <div className='flex h-20 w-20 items-center justify-center rounded-xl bg-stone-100'>
        <Image alt={alt} className='rounded' height='48' src={src} width='48' />
      </div>
      <p className='mt-1 text-center text-sm'>{caption}</p>
    </div>
  )
}

export default PlatformItem
