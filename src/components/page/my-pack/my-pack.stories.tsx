import type { Meta, StoryObj } from '@storybook/react'

import { MyPack } from './my-pack.tsx'

import { BrowserRouterDecorator, ReduxStoreProviderDecorator } from '@/common/utils/decorators.tsx'

const meta = {
  title: 'Page/MyPack',
  component: MyPack,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} satisfies Meta<typeof MyPack>

export default meta
type Story = StoryObj<typeof meta>

export const MyPackStory: Story = {}
