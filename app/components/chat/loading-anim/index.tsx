'use client'
import type { FC } from 'react'
import React from 'react'
import s from './style.module.css'

export type ILoaidingAnimProps = {
  type: 'text' | 'avatar'
}

const LoaidingAnim: FC<ILoaidingAnimProps> = ({
  type,
}) => {
  return (
    <></>
  )
}
export default React.memo(LoaidingAnim)
