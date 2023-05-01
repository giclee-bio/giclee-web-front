import { render } from '@testing-library/react'

import Account from './Account'

describe('Account', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<Account />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
