import { render } from '@testing-library/react'

import PlatformItem from './PlatformItem'

describe('PlatformItem', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<PlatformItem alt='nacal' caption='nacal' src='/nacal.png' />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
