import type { FC } from 'react'
import Logo from '../../icons/Logo'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <Logo className='w-[19px] h-[17px]' />
  )
}

export default AppIcon
