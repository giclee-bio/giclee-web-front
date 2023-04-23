import { render } from '@testing-library/react'

import LoginModal from './LoginModal'

describe('LoginModal', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<LoginModal />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
