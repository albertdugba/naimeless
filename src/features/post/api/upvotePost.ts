import axios from 'axios'
import { useMutation } from 'react-query'
import { Post } from '../interface/post'

type UpvotePost = {
  data: Partial<Post>
  postId: number
}

const upvotePost = async ({ data, postId }: UpvotePost) => {
  return await axios({
    url: `/api/posts/${postId}/upvote`,
    method: 'POST',
    data: data,
  })
}
export const useUpvotePost = (postId: number) => {
  return useMutation((variables: { value: number }) =>
    axios({
      url: `/api/posts/${postId}/upvote`,
      method: 'POST',
      data: { value: variables },
    })
  )
}
