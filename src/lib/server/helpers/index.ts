import { Post } from '@features/post/interface/post'

export const getTotalVotes = (post: Post[]) => {
  return post.reduce((total, _) => total++, 0)
}
