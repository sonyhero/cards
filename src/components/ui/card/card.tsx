import { FC, ReactNode } from 'react'

import s from './card.module.scss'
type CardProps = {
  className?: string
  children: ReactNode
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={`${s.cardBlock} ${className}`}>{children}</div>
}
