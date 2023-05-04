'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import PlatformItem from '@/components/atoms/PlatformItem'

import type { PlatformItemProps } from '@/components/atoms/PlatformItem'

type Props = {
  items: PlatformItemProps[]
}

const PlatformItemsList: React.FC<Props> = ({ items }) => {
  return (
    <ScrollArea.Root className='h-32 max-w-md overflow-hidden'>
      <ScrollArea.Viewport className='h-full w-full rounded'>
        <div className='flex'>
          {items.map((item, key) => (
            <li className='ml-6 list-none first:ml-8' key={key}>
              <PlatformItem {...item} />
            </li>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className='flex touch-none select-none rounded-b bg-stone-100 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-stone-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        orientation='horizontal'
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-full bg-stone-400 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}

export default PlatformItemsList
