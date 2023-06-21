import React, { forwardRef, Ref, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import PropTypes, { InferProps } from 'prop-types'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors cursor-pointer',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    primary:
      'relative overflow-hidden bg-primary-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    primary:
      'border-primary-400 text-primary-400 hover:border-primary-500 active:bg-primary-600 active:text-primary-600',
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'outline'
  color?: 'primary' | 'white' | 'gray'
  className?: string
  href?: string
}

export const Button = forwardRef(function Button(
  {
    variant = 'solid',
    color = 'primary',
    className,
    href,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLAnchorElement>
) {
  const mergedClassName = clsx(
    baseStyles[variant],
    (variantStyles[variant] as { [key: string]: string })[color],
    className
  )

  return href ? (
    <Link href={href} className={mergedClassName} {...props}></Link>
  ) : (
    <a ref={ref} className={mergedClassName} {...props} />
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'outline']),
  color: PropTypes.oneOf(['primary', 'white', 'gray']),
  className: PropTypes.string,
  href: PropTypes.string,
} as InferProps<typeof Button.propTypes>
