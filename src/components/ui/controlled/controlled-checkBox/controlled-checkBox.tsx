import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CheckboxDemo, CheckBoxProps } from '../../checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckBoxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <CheckboxDemo
      {...{
        onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}
