import { FC, useState } from 'react'
import { PostCard } from '@/post-card'

import { Post as SinglePostTypes } from '../interface/post'

interface PostProps {
  post: SinglePostTypes
}

export const SinglePost: FC<PostProps> = ({ post }) => {
  const [toggleCommentBox, setToggleCommentBox] = useState(false)

  return (
    <div>
      <div className="my-2">
        <PostCard
          post={post}
          toggleCard={toggleCommentBox}
          setToggleCard={setToggleCommentBox}
        />
      </div>
    </div>
  )
}
