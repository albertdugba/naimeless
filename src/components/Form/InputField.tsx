import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          `appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm ${
            error && error?.message
              ? 'border border-red-500'
              : 'border-gray-300'
          }`,
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  )
}
