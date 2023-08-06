import type { Meta, StoryObj } from '@storybook/react'

import { EmptyPack } from './empty-pack.tsx'

const meta = {
  title: 'Page/PagePack',
  component: EmptyPack,
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyPack>

export default meta
type Story = StoryObj<typeof meta>

export const PagePackStory: Story = {}