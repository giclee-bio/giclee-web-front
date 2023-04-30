import { render } from '@testing-library/react'

import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<RegisterForm />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
