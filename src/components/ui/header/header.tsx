import { FC } from 'react'

import { Logo } from '../../../common/assets/img'
import { Button } from '../button'
import { DropDownMenuDemo } from '../dropDownMenu'
import { Typography } from '../typography'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
}
export const Header: FC<Props> = props => {
  const { isAuth } = props

  return (
    <div className={s.headerBlock}>
      <Logo />
      {!isAuth && <Button variant={'primary'}>Sign In</Button>}
      {isAuth && (
        <div className={s.avatar_menu}>
          <Typography variant={'subtitle1'} className={s.menu_name}>
            Name
          </Typography>
          <DropDownMenuDemo />
        </div>
      )}
    </div>
  )
}
