import { render } from '@testing-library/react'

import EditableCardItemsList from './EditableCardItemsList'

describe('EditableCardItemsList', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<EditableCardItemsList />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
