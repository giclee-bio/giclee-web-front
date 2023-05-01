import { render } from '@testing-library/react'

import Avatar from './Avatar'

describe('Avatar', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<Avatar alt='aaa' size='medium' src='/' />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
