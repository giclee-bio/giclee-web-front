import { Meta, StoryObj } from '@storybook/react'

import Example from './Example'

const meta: Meta<typeof Example> = {}

export default meta
type Story = StoryObj<typeof Example>

export const Index: Story = {
  args: {},
}
