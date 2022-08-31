import { validateRoute } from 'src/lib/server'

export default validateRoute(async (req, res, user) => {
  await res.json(user)
})
