import { Meta, StoryObj } from '@storybook/react'

import SearchPlatformItemsModule from './SearchPlatformItemsModule'

const meta: Meta<typeof SearchPlatformItemsModule> = {}

export default meta
type Story = StoryObj<typeof SearchPlatformItemsModule>

export const Index: Story = {
  args: {},
}
