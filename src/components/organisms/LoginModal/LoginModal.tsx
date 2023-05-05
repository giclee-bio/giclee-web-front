'use client'
import { signIn } from 'next-auth/react'

import Button from '@/components/atoms/Button'
import Modal from '@/components/molecules/Modal'

import type { Props as ButtonProps } from '@/components/atoms/Button'
import type { DialogProps } from '@/components/molecules/Modal'

const TriggerButtonProps: ButtonProps = {
  children: 'ログイン',
  type: 'primary',
}

const TriggerDefaultButtonProps: ButtonProps = {
  ...TriggerButtonProps,
  type: 'light',
  width: 'half',
}

const dialogProps: DialogProps = {
  description: '現在は、Discordアカウントとの連携でのみログインが可能です。',
  title: 'giclee.bioへようこそ。',
}

type Props = {
  hero?: boolean
}

const LoginModal: React.FC<Props> = ({ hero }) => {
  return (
    <Modal
      buttonProps={hero ? TriggerButtonProps : TriggerDefaultButtonProps}
      dialogProps={dialogProps}
    >
      {/* ToDo NextAuthに置き換え */}
      <Button onClick={signIn} type='discord'>
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
