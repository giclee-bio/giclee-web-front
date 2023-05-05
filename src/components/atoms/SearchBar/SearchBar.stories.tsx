import { Meta, StoryObj } from '@storybook/react'

import SearchBar from './SearchBar'

const meta: Meta<typeof SearchBar> = {}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Index: Story = {
  args: {},
}
