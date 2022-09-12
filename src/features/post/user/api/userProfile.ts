import axios from 'axios'
import { useQuery } from 'react-query'
import { IUser } from '../interface'

const getUser = async (): Promise<IUser> =>
  await axios.get('/api/me').then((res) => res.data)

export const useGetProfile = () => {
  const result = useQuery<IUser, unknown>('me', () => getUser())
  return {
    ...result,
    user: result.data,
  }
}
