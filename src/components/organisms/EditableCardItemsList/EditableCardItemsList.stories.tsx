import { Meta, StoryObj } from '@storybook/react'

import EditableCardItemsList from './EditableCardItemsList'

const meta: Meta<typeof EditableCardItemsList> = {}

export default meta
type Story = StoryObj<typeof EditableCardItemsList>

export const Index: Story = {
  args: {},
}
