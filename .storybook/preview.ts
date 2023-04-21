import type { Preview } from '@storybook/react'
import '../src/styles/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#D7D9D8',
        },
        {
          name: 'dark',
          value: '#303633',
        },
      ],
    },
  },
}

export default preview
