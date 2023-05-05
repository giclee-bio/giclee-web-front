import { render } from '@testing-library/react'

import CardContent from './CardContent'

const account = {
  description: 'よろしくお願いします！',
  displayName: 'nacal',
  iconImageSrc: '/nacal.png',
  id: 'nacal',
}

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

describe('CardContent', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<CardContent account={account} items={items} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
