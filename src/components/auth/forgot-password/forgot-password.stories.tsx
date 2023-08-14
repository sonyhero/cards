import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './forgot-password.tsx'

import { BrowserRouterDecorator, ReduxStoreProviderDecorator } from '@/common/utils/decorators.tsx'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  decorators: [BrowserRouterDecorator, ReduxStoreProviderDecorator],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordStory: Story = {}
