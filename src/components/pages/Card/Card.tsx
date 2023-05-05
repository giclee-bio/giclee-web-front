'use client'

import { useState } from 'react'

import CardContent from '@/components/organisms/CardContent'
import EditableCardItemsList from '@/components/organisms/EditableCardItemsList'
import SearchPlatformItemsModule from '@/components/organisms/SearchPlatformItemsModule'

import type { PlatformItems } from '@/components/atoms/PlatformItem'

export type Account = {
  description: string
  displayName: string
  iconImageSrc: string
  id: string
}

const Card = () => {
  const mockItems = [
    {
      alt: 'nacal',
      caption: 'nacal',
      platformAccountName: 'aaaa',
      src: '/nacal.png',
    },
    {
      alt: 'nacal2',
      caption: 'nacal2',
      platformAccountName: 'bbbb',
      src: '/nacal.png',
    },
    {
      alt: 'nacal3',
      caption: 'nacal3',
      platformAccountName: 'cccc',
      src: '/nacal.png',
    },
    {
      alt: 'nacal4',
      caption: 'nacal4',
      platformAccountName: 'dddd',
      src: '/nacal.png',
    },
    {
      alt: 'nacal5',
      caption: 'nacal5',
      platformAccountName: 'eeee',
      src: '/nacal.png',
    },
    {
      alt: 'nacal6',
      caption: 'nacal6',
      platformAccountName: 'ffff',
      src: '/nacal.png',
    },
  ]
  const mockAccount = {
    description: 'よろしくお願いします！',
    displayName: 'nacal',
    iconImageSrc: '/nacal.png',
    id: 'nacal',
  }
  const [items, setItems] = useState<PlatformItems[]>(mockItems)
  const [bioItems, setBioItems] = useState<PlatformItems[]>([])

  const handleSelectItem = (item: PlatformItems) => {
    setBioItems([...bioItems, item])
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>, caption: string) => {
    setBioItems((prevState) =>
      prevState.map((obj) =>
        obj.caption === caption ? { ...obj, platformAccountName: e.target.value } : obj
      )
    )
  }

  return (
    <div className='flex justify-between'>
      <div>
        <SearchPlatformItemsModule handleSelectItem={handleSelectItem} items={items} />
        <EditableCardItemsList handleChangeText={handleChangeText} items={bioItems} />
      </div>
      <CardContent account={mockAccount} items={bioItems} />
    </div>
  )
}

export default Card
