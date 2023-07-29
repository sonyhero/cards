import { ChangeEvent, KeyboardEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { DeleteIcon, Eye, NotEye, Search } from '../../../common/assets/img'
import { LabelDemo } from '../label'
import { Typography } from '../typography'

import s from './textfield.module.scss'

export type TextFieldProps = {
  type: 'default' | 'password' | 'searchType'
  label?: string
  errorMessage?: string
  placeholder?: string
  disableValue?: boolean
  value: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  onSearchClear?: () => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({
    label,
    errorMessage,
    placeholder = 'TextField',
    type = 'default',
    disableValue = false,
    value,
    onEnter,
    onChangeText,
    onSearchClear,
    ...restProps
  }) => {
    const [showPassword, setShowPassword] = useState(true)

    const finalType = getType(type, showPassword)

    const inputStyle = (type: 'default' | 'password' | 'searchType') => {
      if (type === 'searchType') {
        return { paddingLeft: '2.56rem', paddingRight: '35px' }
      } else if (type === 'password') {
        return { paddingRight: '35px' }
      } else {
        return {}
      }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText?.(e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onEnter && e.key === 'Enter' && onEnter()
    }

    const onSearchClearHandler = () => {
      onSearchClear?.()
    }

    return (
      <LabelDemo label={label} variant={'secondary'}>
        <div className={s.fieldContainer}>
          {type === 'searchType' && (
            <span className={s.search}>
              <Search fill={disableValue ? '#4c4c4c' : '#808080'} />
            </span>
          )}
          <input
            className={`${s.field} ${errorMessage ? s.error : ''}`}
            placeholder={placeholder}
            type={finalType}
            disabled={disableValue}
            onChange={onChangeHandler}
            onKeyDown={onKeyPressCallback}
            style={inputStyle(type)}
            value={value}
            {...restProps}
          />
          {type === 'password' && (
            <button
              className={s.buttonAction}
              type={'button'}
              disabled={disableValue}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? (
                <Eye fill={disableValue ? '#4c4c4c' : '#fff'} />
              ) : (
                <NotEye fill={disableValue ? '#4c4c4c' : '#fff'} />
              )}
            </button>
          )}
          {type === 'searchType' && (
            <button
              className={s.buttonAction}
              type={'button'}
              disabled={disableValue}
              onClick={onSearchClearHandler}
            >
              <DeleteIcon fill={disableValue ? '#4c4c4c' : '#808080'} />
            </button>
          )}
        </div>
        <Typography variant="body1" className={s.errorMessage}>
          {errorMessage}
        </Typography>
      </LabelDemo>
    )
  }
)

function getType(type: string, showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
