import axios from 'axios'
import { useQuery } from 'react-query'
import { Post } from '../interface/post'

export const getAllPosts = async (): Promise<Post[]> =>
  await axios.get('/api/posts').then((res) => res.data)

export const useGetAllPosts = () => {
  const result = useQuery<Post[]>('posts', getAllPosts)
  return { ...result, post: result.data }
}
