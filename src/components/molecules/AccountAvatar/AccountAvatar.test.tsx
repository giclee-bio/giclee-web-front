import { render } from '@testing-library/react'

import AccountAvatar from './AccountAvatar'

describe('AccountAvatar', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<AccountAvatar />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
