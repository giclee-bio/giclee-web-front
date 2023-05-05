import { render } from '@testing-library/react'

import Card from './Card'

describe('Card', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<Card />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
