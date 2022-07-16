import { GenericList } from '@List'
import { FC } from 'react'
import { Post } from '../interface/post'
import { SinglePost } from './Post'

interface PostsProps {
  posts: Post[]
}

export const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <GenericList data={posts}>
      {(post) => <SinglePost post={post} />}
    </GenericList>
  )
}
