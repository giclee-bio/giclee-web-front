import { render } from '@testing-library/react'

import SearchPlatformItemsModule from './SearchPlatformItemsModule'

describe('SearchPlatformItemsModule', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<SearchPlatformItemsModule />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
