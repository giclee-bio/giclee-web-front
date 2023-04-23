'use client'
import Button from '@/components/atoms/Button'
import Modal from '@/components/molecules/Modal'

import type { Props as ButtonProps } from '@/components/atoms/Button'
import type { DialogProps } from '@/components/molecules/Modal'

const TriggerButtonProps: ButtonProps = {
  children: 'ログイン',
  type: 'light',
  width: 'half',
}

const dialogProps: DialogProps = {
  description: '現在は、Discordアカウントとの連携でのみログインが可能です。',
  title: 'gicleeへようこそ。',
}

const LoginModal = () => {
  return (
    <Modal buttonProps={TriggerButtonProps} dialogProps={dialogProps}>
      <Button
        onClick={() => {
          console.log('aaa')
        }}
        type='discord'
      >
        Discordでログイン
      </Button>
      <p className='mt-4 w-64 text-xs'>
        <a className='underline' href='/'>
          利用規約
        </a>
        、
        <a className='underline' href='/'>
          プライバシーポリシー
        </a>
        に同意したうえでログインしてください。
      </p>
    </Modal>
  )
}

export default LoginModal
