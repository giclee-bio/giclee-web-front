import Form from '@/components/molecules/Form'

import type { Props as ButtonProps } from '@/components/atoms/Button'
import type { FormField } from '@/components/molecules/Form'

const buttonProps: ButtonProps = {
  children: '更新する',
  type: 'primary',
  width: 'half',
}

const formFields: FormField[] = [
  {
    label: '表示名',
    name: 'displayName',
    require: true,
    tag: 'input',
    type: 'text',
  },
  {
    cols: 30,
    label: '自己紹介',
    name: 'username',
    require: true,
    rows: 5,
    tag: 'textarea',
  },
]

const AccountInfoForm = () => {
  return <Form buttonCenter={false} buttonProps={buttonProps} formFields={formFields} />
}

export default AccountInfoForm
