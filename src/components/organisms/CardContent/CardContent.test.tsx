import { render } from '@testing-library/react'

import CardContent from './CardContent'

describe('CardContent', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<CardContent />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
