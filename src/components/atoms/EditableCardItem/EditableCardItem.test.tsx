import * as RadixForm from '@radix-ui/react-form'
import { render } from '@testing-library/react'

import EditableCardItem from './EditableCardItem'

import type { PlatformItems } from '@/components/atoms/PlatformItem'

const item: PlatformItems = {
  alt: 'nacal',
  caption: 'nacal',
  platformAccountName: 'nacal',
  src: '/nacal.png',
}

describe('EditableCardItem', () => {
  it('snapshot', async () => {
    const { asFragment } = render(
      <RadixForm.Root>
        <EditableCardItem
          {...item}
          handleChangeText={() => jest.mock}
          handleClickDeleteItem={() => jest.mock}
        />
      </RadixForm.Root>,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
