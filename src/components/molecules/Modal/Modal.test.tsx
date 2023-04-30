import { render } from '@testing-library/react'

import Modal from './Modal'

import type { Props as ButtonProps } from '@/components/atoms/Button'
import type { DialogProps } from '@/components/molecules/Modal'

const buttonProps: ButtonProps = {
  children: 'login',
  type: 'light',
  width: 'half',
}

const dialogProps: DialogProps = {
  description: 'description text',
  title: 'title text',
}

describe('Modal', () => {
  it('snapshot', async () => {
    const { asFragment } = render(
      <Modal buttonProps={buttonProps} dialogProps={dialogProps}>
        children contents
      </Modal>,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
