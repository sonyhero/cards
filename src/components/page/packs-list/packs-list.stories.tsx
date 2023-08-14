import type { Meta, StoryObj } from '@storybook/react'

import { PacksList } from './packs-list.tsx'

import { BrowserRouterDecorator, ReduxStoreProviderDecorator } from '@/common/utils/decorators.tsx'

const meta = {
  title: 'Page/PacksList',
  component: PacksList,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} satisfies Meta<typeof PacksList>

export default meta
type Story = StoryObj<typeof meta>

export const PackListStory: Story = {}
