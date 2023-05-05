import { render } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  it('snapshot', async () => {
    const session: Session = {
      user: {
        name: '',
      },
      expires: new Date().toISOString(),
    }
    const { asFragment } = render(
      <SessionProvider session={session}>
        <RegisterForm />
      </SessionProvider>,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
