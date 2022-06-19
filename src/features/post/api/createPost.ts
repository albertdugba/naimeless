import { Prisma } from '@prisma/client'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

export const createPost = async (post: Prisma.PostCreateInput) => {
  return await axios({
    url: '/api/posts/create-post',
    method: 'POST',
    data: post,
  })
}

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
