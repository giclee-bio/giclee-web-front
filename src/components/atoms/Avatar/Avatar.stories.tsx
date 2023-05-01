import { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {}

export default meta
type Story = StoryObj<typeof Avatar>

export const Index: Story = {
  args: {
    alt: '',
    size: 'medium',
    src: '/nacal.png',
  },
}
