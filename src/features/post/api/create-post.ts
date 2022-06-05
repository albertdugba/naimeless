import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (values: { message: string; published: boolean; author: string }) =>
      axios({
        url: `/api/posts/create`,
        method: 'POST',
        data: values,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts')
        console.log('post created successfully')
      },
      onError: () => {
        console.log('error ocurred whiles creating post')
      },
    }
  )
}
