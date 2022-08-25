import { validateRoute } from 'src/lib/server/helpers/validationRoute'

export default validateRoute((req, res, user) => {
  console.log(res)
  res.json(user)
})
