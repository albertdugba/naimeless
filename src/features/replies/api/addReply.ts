import { Reply } from '@features/comments/interface/comment'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

interface IReply {
  commentId: number
  body: string
}

export const addCommentReply = ({
  commentId,
  body,
}: IReply): Promise<Reply> => {
  return axios.post(`/api/posts/${commentId}/add-reply`, { commentId, body })
}

export const useAddCommentReply = () => {
  const queryClient = useQueryClient()
  return useMutation((data: IReply) => addCommentReply(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
    },
  })
}
