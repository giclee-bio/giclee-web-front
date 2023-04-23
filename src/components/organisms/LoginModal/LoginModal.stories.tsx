import { Meta, StoryObj } from '@storybook/react'

import LoginModal from './LoginModal'

const meta: Meta<typeof LoginModal> = {
  component: LoginModal,
  title: 'LoginModal',
}

export default meta
type Story = StoryObj<typeof LoginModal>

export const Index: Story = {}
