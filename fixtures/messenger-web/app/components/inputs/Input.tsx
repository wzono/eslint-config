import clsx from 'clsx'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
}
const Input = (props: InputProps) => {
  const { label, name, type, required, register, disabled, errors } = props
  return (
    <div>
      <label
        className="
          block
          text-sm
          font-medium
          leading-6
          text-gray-900
        "
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          autoComplete={name}
          className={clsx(`
            form-input
            block
            w-full
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-600
            sm:text-sm
            sm:leading-6
          `,
          errors[name] && 'focus:ring-rose-500',
          disabled && 'opacity-50 cursor-default',
          )}
          disabled={disabled}
          id={name}
          type={type}
          {...register(name, { required })}
        />
      </div>
    </div>
  )
}

export default Input
