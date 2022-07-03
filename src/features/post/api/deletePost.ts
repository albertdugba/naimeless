import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

export const deletePost = async (postId: string) => {
  return await axios({ url: `/api/posts/${postId}/delete`, method: 'DELETE' })
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  return useMutation((variables: { id: string }) => deletePost(variables.id), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      console.log('Post Deleted successfully')
    },
    onError: () => {
      console.log('Failed to delete post')
    },
  })
}
