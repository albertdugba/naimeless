import axios from 'axios'
import { useQuery } from 'react-query'
import { Post } from '../interface/post'

export const getSinglePost = async (id: number): Promise<Post> => {
  return await axios.get(`/api/posts/${id}/show`).then((res) => res.data?.data)
}

export const useGetSinglePost = (id: number) => {
  const result = useQuery<Post>(['posts', id], () => getSinglePost(id), {
    enabled: !!Number(id),
  })
  return { ...result, post: result.data }
}
