import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form'
import { ZodType, ZodTypeDef } from 'zod'

type FormProps<T, Schema> = {
  className?: string
  onSubmit: SubmitHandler<T>
  children: (methods: UseFormReturn<T>) => ReactNode
  options?: UseFormProps<T>
  id?: string
  schema: Schema
}

export const Form = <
  T extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: FormProps<T, Schema>) => {
  const methods = useForm<T>({
    ...options,
    resolver: schema && zodResolver(schema),
  })
  return (
    <form
      className={clsx('space-y-6', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  )
}
