import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type ButtonTypes = 'primary' |'secondary' | 'error'

interface Props {
  htmlType?: ButtonHTMLAttributes<any>['type']
  children: React.ReactNode
  block?: boolean
  onClick?: () => void
  type?: ButtonTypes
  disabled?: boolean
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>

export type ButtonProps = Props & NativeAttrs

const Button = (props: ButtonProps) => {
  const { children, onClick, type = 'primary', disabled, htmlType, className, block, ...rest } = props
  return (
    <button
      {...rest}
      className={
        clsx(`
          flex justify-center rounded-md px-3 py-2 text-sm font-semibold
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        `,
        disabled && 'opacity-50 cursor-default',
        block && 'w-full',
        type === 'primary' && 'text-white bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600',
        type === 'secondary' && 'text-gray-900',
        type === 'error' && 'text-white bg-rose-500 hover:bg-rose-600  focus-visible:outline-rose-600',
        className)
      }
      disabled={disabled}
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
