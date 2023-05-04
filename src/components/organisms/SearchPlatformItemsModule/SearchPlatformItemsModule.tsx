import { CaretRightIcon } from '@radix-ui/react-icons'

import SearchBar from '@/components/atoms/SearchBar'
import PlatformItemsList from '@/components/molecules/PlatformItemsList'

import type { PlatformItemProps } from '@/components/atoms/PlatformItem'

const SearchPlatformItemsModule = () => {
  const item = {
    alt: 'nacal',
    caption: 'nacal',
    src: '/nacal.png',
  }
  const items: PlatformItemProps[] = new Array(8).fill(item)

  return (
    <section className='max-w-md rounded-lg bg-stone-800'>
      <h2 className='pl-8 pt-6 font-bold'>新しいIDを追加</h2>
      <section className='flex justify-between p-8 pt-4'>
        <SearchBar />
        <button className='ml-8 flex items-center'>
          View All <CaretRightIcon className='ml-1 inline' height='16' width='16' />
        </button>
      </section>
      <section className=''>
        <PlatformItemsList items={items} />
      </section>
    </section>
  )
}

export default SearchPlatformItemsModule
