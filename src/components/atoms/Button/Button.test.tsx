import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  it('snapshot link', async () => {
    const { asFragment } = render(
      <Button href='/hoge' isLink={true}>
        children
      </Button>,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('snapshot button', async () => {
    const { asFragment } = render(<Button onClick={jest.fn()}>children</Button>, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
