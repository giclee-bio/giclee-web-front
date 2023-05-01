import { Meta, StoryObj } from '@storybook/react'

import AccountInfoForm from './AccountInfoForm'

const meta: Meta<typeof AccountInfoForm> = {}

export default meta
type Story = StoryObj<typeof AccountInfoForm>

export const Index: Story = {
  args: {},
}
