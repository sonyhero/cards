import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Button } from '../button'
import { CheckboxDemo } from '../checkbox'
import { RadioGroupDemo } from '../radioGroup'
import { TextField } from '../textfield'
import { Typography } from '../typography'

import { Modal } from './modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
// type Story = StoryObj<typeof meta>

// export const ModalStory: Story = {
//   args: {
//     open: true,
//     title: 'hello there',
//     showCloseButton: true,
//     children: (
//       <>
//         <TextField type={'searchType'} />
//         <TextField type={'default'} />
//         <CheckboxDemo variant={'default'} />
//         <Typography variant={'body1'}> Hello There!</Typography>
//         <RadioGroupDemo />
//       </>
//     ),
//   },
// }

export const ModalDemo = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant={'primary'} onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal title={'hello'} showCloseButton={true} open={open} onClose={handleClose}>
        <TextField type={'searchType'} />
        <TextField type={'default'} />
        <CheckboxDemo variant={'default'} />
        <Typography variant={'body1'}> Hello There!</Typography>
        <RadioGroupDemo />
      </Modal>
    </>
  )
}