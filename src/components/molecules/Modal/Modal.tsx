'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import classNames from 'classnames'

import Button from '@/components/atoms/Button'

import type { Props as ButtonProps } from '@/components/atoms/Button'

export type DialogProps = {
  description: string
  title: string
}

type Props = {
  buttonProps: ButtonProps
  children: React.ReactNode
  dialogProps: DialogProps
}

const centeringClasses = classNames(
  'fixed',
  'left-1/2',
  'top-1/2',
  '-translate-x-1/2',
  '-translate-y-1/2'
)

const Modal: React.FC<Props> = ({ buttonProps, dialogProps: { description, title }, children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button {...buttonProps} />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-base/50' />
      <Dialog.Content
        className={`flex max-h-screen w-90vw max-w-sm flex-col items-center rounded bg-stone-800 p-8 ${centeringClasses}`}
      >
        <Dialog.Title className='text-2xl font-bold'>{title}</Dialog.Title>
        <Dialog.Description className='mt-8'>{description}</Dialog.Description>
        <div className='mt-8'>{children}</div>
        <Dialog.Close asChild>
          <button
            aria-label='Close'
            className='absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full'
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default Modal
