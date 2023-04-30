'use client'

import * as RadixForm from '@radix-ui/react-form'
import { HTMLInputTypeAttribute } from 'react'

import Button from '@/components/atoms/Button'

import type { Props as ButtonProps } from '@/components/atoms/Button'

export type FormField = {
  label: string
  name: string
  require?: boolean
  tag: 'input' | 'textarea'
  type: HTMLInputTypeAttribute
  validations?: FormMessage[]
} & ({ require: undefined; tag: 'textarea' } | { tag: 'input' })

export type FormMessage = {
  match: RadixForm.CustomMatcher
  message: string
}

type Props = {
  buttonProps: ButtonProps
  formFields: FormField[]
}

const FormMessage: React.FC<FormMessage> = ({ match, message }) => {
  return (
    <RadixForm.Message className='text-ruby-400' match={match}>
      {message}
    </RadixForm.Message>
  )
}

const FormItem: React.FC<FormField> = ({
  label,
  name,
  require = false,
  tag,
  type,
  validations,
}) => {
  return (
    <RadixForm.Field name={name}>
      <div className='flex justify-between text-sm'>
        <RadixForm.Label className='font-bold'>{label}</RadixForm.Label>
        {require && (
          <RadixForm.Message className='text-ruby-400' match='valueMissing'>
            必須項目です
          </RadixForm.Message>
        )}
        {validations &&
          validations.map((validation, key) => {
            return <FormMessage {...validation} key={key} />
          })}
      </div>
      <RadixForm.Control asChild className='mt-2 bg-white'>
        {tag === 'input' ? (
          <input className='h-8 w-full rounded px-3 text-base' required={require} type={type} />
        ) : (
          <textarea className='h-8 w-full rounded px-3 text-base' required={require} />
        )}
      </RadixForm.Control>
    </RadixForm.Field>
  )
}

const Form: React.FC<Props> = ({ buttonProps, formFields }) => {
  return (
    <RadixForm.Root className='w-64'>
      {formFields.map((formFieid, key) => {
        return <FormItem {...formFieid} key={key} />
      })}
      <RadixForm.Submit asChild>
        <Button {...buttonProps} className='mx-auto mt-9 block' />
      </RadixForm.Submit>
    </RadixForm.Root>
  )
}

export default Form
