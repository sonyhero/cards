import type { Meta, StoryObj } from '@storybook/react'

import { LearnPack } from './learn-pack.tsx'

import { BrowserRouterDecorator, ReduxStoreProviderDecorator } from '@/common/utils/decorators.tsx'

const meta = {
  title: 'Page/LearnPack',
  component: LearnPack,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} satisfies Meta<typeof LearnPack>

export default meta
type Story = StoryObj<typeof meta>

export const LearnPackStory: Story = {}
