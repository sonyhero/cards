import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textfield.tsx'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'text changes' } },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextFieldDefault: Story = {
  args: {
    placeholder: 'Default',
    value: '',
    type: 'default',
    disableValue: false,
  },
}
export const TextFieldDefaultError: Story = {
  args: {
    placeholder: 'Default',
    value: '',
    type: 'default',
    disableValue: false,
    errorMessage: 'Error!',
  },
}
export const TextFieldPassword: Story = {
  args: {
    placeholder: 'Password',
    value: '',
    type: 'password',
    disableValue: false,
  },
}
export const TextFieldPasswordError: Story = {
  args: {
    placeholder: 'Password',
    value: '',
    type: 'password',
    disableValue: false,
    errorMessage: 'Error!',
  },
}
export const TextFieldSearch: Story = {
  args: {
    placeholder: 'Search',
    value: '',
    type: 'searchType',
    disableValue: false,
  },
}
export const TextFieldSearchError: Story = {
  args: {
    placeholder: 'Search',
    value: '',
    type: 'searchType',
    disableValue: false,
    errorMessage: 'Error!',
  },
}
