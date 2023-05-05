import * as RadixForm from '@radix-ui/react-form'
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import type { PlatformItems } from '@/components/atoms/PlatformItem'

interface Props extends PlatformItems {
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>, caption: string) => void
  handleClickDeleteItem: (caption: string) => void
}

const EditableCardItem: React.FC<Props> = ({
  alt,
  caption,
  platformAccountName,
  src,
  handleChangeText,
  handleClickDeleteItem,
}) => {
  return (
    <>
      <li className='mt-6 flex list-none items-center justify-between rounded-lg bg-stone-800 p-4 pl-8 first:mt-0'>
        <div className=''>
          <RadixForm.Field className='mt-4 first:mt-0' name={caption}>
            <div className='flex justify-between text-sm'>
              <RadixForm.Label className='font-bold'>{caption}</RadixForm.Label>
              <RadixForm.Message className='text-ruby-400' match='valueMissing'>
                必須項目です
              </RadixForm.Message>
            </div>
            <div className='mt-2 flex gap-2'>
              <Image alt={alt} className='rounded' height='32' src={src} width='32' />
              <RadixForm.Control asChild className='bg-stone-50'>
                <input
                  className='h-8 w-72 rounded px-3 text-black'
                  onChange={(e) => handleChangeText(e, caption)}
                  required
                  type='text'
                  value={platformAccountName}
                />
              </RadixForm.Control>
            </div>
          </RadixForm.Field>
          <div className='mt-2 flex justify-end'>
            <button
              className='text-sm text-ruby-400'
              onClick={() => handleClickDeleteItem(caption)}
            >
              Delete
            </button>
          </div>
        </div>
        <DragHandleHorizontalIcon className='text-stone-400' height='24' width='24' />
      </li>
    </>
  )
}

export default EditableCardItem
