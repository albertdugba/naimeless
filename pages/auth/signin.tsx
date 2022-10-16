import * as z from 'zod'

import { Form } from '@/Form/Form'
import { InputField } from '@/Form/InputField'
import { AuthLayout } from '@/layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Button } from '@/ui/button'

const SignIn = () => {
  const router = useRouter()
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
          axios
            .post('/api/signin', values)
            .then((res) => {
              console.log('[Res]', router.query.from.toString())
              if (res.data) {
                if (router.query && router.query.from) {
                  router.push(router.query.from.toString())
                }
              }
            })
            .catch((err) => console.log(err))
        }}
        className="bg-white px-8 py-8 rounded-[14px] max-w-[420px] mx-auto"
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <div>
              <h1 className="text-2xl font-bold">Sign In</h1>
              <span className="text-sm text-gray-400">
                Enter your Naimeless Account details.
              </span>
            </div>
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
              <Button variant="ghost" className="w-full mt-4">
                Create an Account
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}

SignIn.Layout = AuthLayout
export default SignIn
