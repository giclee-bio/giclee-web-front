import { render } from '@testing-library/react'

import EditableCardItemsList from './EditableCardItemsList'

import type { PlatformItems } from '@/components/atoms/PlatformItem'

const item = {
  alt: 'nacal',
  caption: 'nacal',
  src: '/nacal.png',
}
const items: PlatformItems[] = new Array(8).fill(item)

describe('EditableCardItemsList', () => {
  it('snapshot', async () => {
    const { asFragment } = render(
      <EditableCardItemsList handleChangeText={() => jest.mock} items={items} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
