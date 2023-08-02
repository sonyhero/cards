import { Back } from '../../../common/assets'
import { Button, Typography } from '../../ui'

import s from './page-pack.module.scss'

export const PagePack = () => {
  return (
    <div className={s.packListBlock}>
      <Button variant={'link'} className={s.backButton}>
        <Back />
        Back to Packs List
      </Button>
      <Typography variant={'large'} className={s.title}>
        Name Pack
      </Typography>
      <Typography variant={'body1'} className={s.description}>
        This pack is empty. Click add new card to fill this pack
      </Typography>
      <div className={s.addNewPackButton}>
        <Button variant={'primary'}>Add New Card</Button>
      </div>
    </div>
  )
}