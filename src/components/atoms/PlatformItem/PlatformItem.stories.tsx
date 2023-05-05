import { Meta, StoryObj } from '@storybook/react'

import PlatformItem from './PlatformItem'

const meta: Meta<typeof PlatformItem> = {}

export default meta
type Story = StoryObj<typeof PlatformItem>

export const Index: Story = {
  args: {
    alt: 'nacal',
    caption: 'nacal',
    src: '/nacal.png',
  },
}
