import { render } from '@testing-library/react'

import SearchPlatformItemsModule from './SearchPlatformItemsModule'

const items = [
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
]

describe('SearchPlatformItemsModule', () => {
  it('snapshot', async () => {
    const { asFragment } = render(
      <SearchPlatformItemsModule handleSelectItem={() => jest.mock} items={items} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
