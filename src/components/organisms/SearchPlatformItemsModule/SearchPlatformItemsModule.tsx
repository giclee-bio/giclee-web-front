import { CaretRightIcon } from '@radix-ui/react-icons'

import SearchBar from '@/components/atoms/SearchBar'
import PlatformItemsList from '@/components/molecules/PlatformItemsList'

import type { PlatformItems } from '@/components/atoms/PlatformItem'

type Props = {
  handleSelectItem: (item: PlatformItems) => void
  items: PlatformItems[]
}

const SearchPlatformItemsModule: React.FC<Props> = ({ handleSelectItem, items }) => {
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
        <PlatformItemsList handleSelectItem={handleSelectItem} items={items} />
      </section>
    </section>
  )
}

export default SearchPlatformItemsModule
