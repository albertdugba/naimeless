import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { deletePost } from '.'

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

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  return useMutation((id: string) => deletePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
    },
    onError: () => {
      console.log('Post deleted successfully')
    },
  })
}
