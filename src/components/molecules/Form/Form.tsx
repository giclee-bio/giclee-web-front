'use client'

import * as RadixForm from '@radix-ui/react-form'
import { HTMLInputTypeAttribute } from 'react'

import Button from '@/components/atoms/Button'

import type { Props as ButtonProps } from '@/components/atoms/Button'

export type FormField = {
  cols?: number
  defaultValue?: string
  label: string
  name: string
  require?: boolean
  rows?: number
  tag: 'input' | 'textarea'
  type?: HTMLInputTypeAttribute
  validations?: FormMessage[]
} & (
  | { cols: number; rows: number; tag: 'textarea'; type?: undefined }
  | { cols?: undefined; rows?: undefined; tag: 'input'; type: HTMLInputTypeAttribute }
)

export type FormMessage = {
  match: RadixForm.CustomMatcher
  message: string
}

type Props = {
  buttonCenter?: boolean
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
  cols,
  defaultValue,
  label,
  name,
  require = false,
  rows,
  tag,
  type,
  validations,
}) => {
  return (
    <RadixForm.Field className='mt-4 first:mt-0' name={name}>
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
      <RadixForm.Control asChild className='mt-2 bg-stone-50'>
        {tag === 'input' ? (
          <input
            className='h-8 w-full rounded px-3 text-black'
            defaultValue={defaultValue}
            required={require}
            type={type}
          />
        ) : (
          <textarea
            className='w-full rounded px-3 text-black'
            cols={cols}
            defaultValue={defaultValue}
            required={require}
            rows={rows}
          />
        )}
      </RadixForm.Control>
    </RadixForm.Field>
  )
}

const Form: React.FC<Props> = ({ buttonCenter = true, buttonProps, formFields }) => {
  return (
    <RadixForm.Root className='w-64'>
      {formFields.map((formFieid, key) => {
        return <FormItem {...formFieid} key={key} />
      })}
      <RadixForm.Submit asChild>
        <Button {...buttonProps} className={`mt-9 block ${buttonCenter ? 'mx-auto' : ''}`} />
      </RadixForm.Submit>
    </RadixForm.Root>
  )
}

export default Form
