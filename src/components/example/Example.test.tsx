import { render } from '@testing-library/react'

import Example from './Example'

describe('Button', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<Example />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
