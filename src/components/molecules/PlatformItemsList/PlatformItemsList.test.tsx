import { render } from '@testing-library/react'

import PlatformItemsList from './PlatformItemsList'

import type { PlatformItemProps } from '@/components/atoms/PlatformItem'

const item = {
  alt: 'nacal',
  caption: 'nacal',
  src: '/nacal.png',
}
const items: PlatformItemProps[] = new Array(8).fill(item)

describe('PlatformItemsList', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<PlatformItemsList items={items} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
