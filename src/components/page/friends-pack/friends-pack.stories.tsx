import type { Meta, StoryObj } from '@storybook/react'

import { FriendsPack } from './friends-pack.tsx'

import { BrowserRouterDecorator, ReduxStoreProviderDecorator } from '@/common/utils/decorators.tsx'

const meta = {
  title: 'Page/FriendsPack',
  component: FriendsPack,
  tags: ['autodocs'],
  decorators: [BrowserRouterDecorator, ReduxStoreProviderDecorator],
} satisfies Meta<typeof FriendsPack>

export default meta
type Story = StoryObj<typeof meta>

export const FriendsPackStory: Story = {}
