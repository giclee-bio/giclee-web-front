import { render } from '@testing-library/react'

import Form from './Form'

import type { Props as ButtonProps } from '@/components/atoms/Button'
import type { FormField } from '@/components/molecules/Form'

const buttonProps: ButtonProps = {
  children: '登録する',
  type: 'primary',
}

const formFields: FormField[] = [
  {
    label: 'ユーザー名',
    name: 'username',
    require: true,
    tag: 'input',
    type: 'text',
  },
]

describe('Form', () => {
  it('snapshot', async () => {
    const { asFragment } = render(<Form buttonProps={buttonProps} formFields={formFields} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
