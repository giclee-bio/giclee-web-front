import { Meta, StoryObj } from '@storybook/react'

import PlatformItemsList from './PlatformItemsList'

const meta: Meta<typeof PlatformItemsList> = {}

export default meta
type Story = StoryObj<typeof PlatformItemsList>

export const Index: Story = {
  args: {},
}
