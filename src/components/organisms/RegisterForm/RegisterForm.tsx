'use client'
import { useSession } from 'next-auth/react'

import Form from '@/components/molecules/Form'

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

const RegisterForm = () => {
  const { data: session } = useSession()
  formFields[0].defaultValue = session?.user?.name || undefined
  return (
    <section className='flex h-96 w-80 flex-col items-center justify-between rounded bg-stone-800 p-8'>
      <h1 className='text-2xl font-bold'>ユーザー登録</h1>
      <p>ユーザー名は後から変更することができません。</p>
      <Form buttonProps={buttonProps} formFields={formFields} />
    </section>
  )
}

export default RegisterForm
