import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  as?: any
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  as: Component = 'button',
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
