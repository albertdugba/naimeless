import { validateRoute } from 'src/lib/server'

export default validateRoute(async (req, res, user) => {
  console.log('User profile', user)
  await res.json(user)
})
