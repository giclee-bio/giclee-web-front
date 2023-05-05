import { Meta, StoryObj } from '@storybook/react'

import EditableCardItem from './EditableCardItem'

const meta: Meta<typeof EditableCardItem> = {}

export default meta
type Story = StoryObj<typeof EditableCardItem>

export const Index: Story = {
  args: {},
}
