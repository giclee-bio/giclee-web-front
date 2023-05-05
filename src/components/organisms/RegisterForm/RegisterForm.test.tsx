import { render } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'

import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  it('snapshot', async () => {
    const { asFragment } = render(
      <SessionProvider>
        <RegisterForm />
      </SessionProvider>,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
