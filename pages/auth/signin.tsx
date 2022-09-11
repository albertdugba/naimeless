import { Button } from '@elements/Button'
import { TextField } from '@elements/Form'
import { Form } from '@Form/Form'
import { InputField } from '@Form/InputField'
import { getAuthLayout } from '@layout'
import { FormEvent, useState } from 'react'
import * as z from 'zod'

const SignIn = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const schema = z.object({
    email: z.string().min(1, 'Email is Required'),
    password: z.string().min(1, 'Password is Required'),
  })

  type LoginValues = {
    email: string
    password: string
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          // await login(values)
        }}
        className="bg-white px-8 py-8 rounded-[14px] max-w-[450px] mx-auto"
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div>
              <Button type="submit" className="w-full">
                Log in
              </Button>
              <Button variant="outlined" className="w-full mt-4">
                Create an Account
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}

SignIn.getAuthLayout = getAuthLayout
export default SignIn
