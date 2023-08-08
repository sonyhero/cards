import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Label from '@radix-ui/react-label'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckBoxProps = {
  onChange?: (checked: boolean) => void
  disabled?: boolean
  checked?: boolean
  variant: 'default' | 'withText'
  checkBoxText?: string
}

export const CheckboxDemo: FC<CheckBoxProps> = ({
  disabled = false,
  checked,
  checkBoxText,
  onChange,
}) => {
  return (
    <div className={s.checkBoxBlock}>
      <Label.Root>
        <Typography
          className={`${s.label} ${disabled ? s.labelDisabled : ''}`}
          variant={'body2'}
          as={'label'}
        >
          <Checkbox.Root
            className={`${s.checkboxRoot} ${checked ? s.active : s.unActive}`}
            id="c1"
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
          >
            <Checkbox.Indicator className={s.checkboxIndicator}>
              <CheckIcon className={s.icon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          {checkBoxText}
        </Typography>
      </Label.Root>
    </div>
  )
}
