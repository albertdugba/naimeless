import { Button } from '@elements/Button'
import { TextField } from '@elements/Form'
import { getAuthLayout } from '@layout'

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <form className="bg-white max-w-[450px] mx-auto px-6 py-10 mt-20 rounded-lg w-full shadow-md">
        <h1 className="text-2xl font-bold">Log In</h1>
        <div className="mt-4">
          <TextField label="Email" />
          <div className="mt-6">
            <TextField label="Password" />
          </div>

          <Button size="large" variant="primary" className="mt-6" fullWidth>
            Sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

SignIn.getAuthLayout = getAuthLayout
export default SignIn
