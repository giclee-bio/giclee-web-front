import Image from 'next/image'

export type PlatformItems = {
  alt: string
  caption: string
  src: string
}
interface Props extends PlatformItems {
  handleSelectItem: (item: PlatformItems) => void
}

const PlatformItem: React.FC<Props> = ({ alt, caption, handleSelectItem, src }) => {
  return (
    <button className='w-20' onClick={() => handleSelectItem({ alt, caption, src })}>
      <div className='flex h-20 w-20 items-center justify-center rounded-xl bg-stone-100'>
        <Image alt={alt} className='rounded' height='48' src={src} width='48' />
      </div>
      <p className='mt-1 text-center text-sm'>{caption}</p>
    </button>
  )
}

export default PlatformItem
