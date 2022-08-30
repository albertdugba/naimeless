import { validateRoute } from 'src/lib/server'

export default validateRoute((req, res, user) => {
  console.log(res)
  res.json(user)
})
