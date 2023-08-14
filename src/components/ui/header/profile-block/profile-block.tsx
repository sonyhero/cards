import { FC } from 'react'

import { AvatarDemo } from '../../avatar'

import s from './profile-block.module.scss'

import { Typography } from '@/components/ui'
import { ResponseUserType } from '@/services/auth'

type PropsType = {
  data?: ResponseUserType | null
}
export const ProfileBlock: FC<PropsType> = ({ data }) => {
  return (
    <div className={s.infoBlock}>
      <AvatarDemo src={data?.avatar} name={data?.name} />
      <div className={s.info}>
        <Typography variant={'subtitle2'}>{data?.name}</Typography>
        <Typography variant={'caption'} className={s.email}>
          {data?.email}
        </Typography>
      </div>
    </div>
  )
}
