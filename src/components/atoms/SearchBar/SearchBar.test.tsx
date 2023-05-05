import { render } from '@testing-library/react'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<SearchBar />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
