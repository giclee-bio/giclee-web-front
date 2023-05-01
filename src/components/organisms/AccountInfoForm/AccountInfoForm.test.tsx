import { render } from '@testing-library/react'

import AccountInfoForm from './AccountInfoForm'

describe('AccountInfoForm', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<AccountInfoForm />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
