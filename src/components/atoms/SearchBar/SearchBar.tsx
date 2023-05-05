'use client'

import * as Form from '@radix-ui/react-form'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const SearchBar = () => {
  return (
    <Form.Root>
      <Form.Field name='search'>
        <Form.Label className='sr-only'>Search</Form.Label>
        <div className='relative flex h-8'>
          <MagnifyingGlassIcon
            className='absolute left-1 h-8 text-stone-400'
            height='24'
            width='24'
          />
          <Form.Control asChild>
            <input
              className='rounded bg-stone-50 pl-8 pr-3 text-black placeholder:text-sm placeholder:text-stone-200'
              placeholder='さがす'
              required
              type='search'
            />
          </Form.Control>
        </div>
      </Form.Field>
    </Form.Root>
  )
}

export default SearchBar
