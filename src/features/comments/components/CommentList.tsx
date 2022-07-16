import { GenericList } from '@List'
import { FC } from 'react'
import { Comments } from '../interface/comment'
import { SingleComment } from './Comment'

interface CommentListProps {
  commnents: Comments[]
}
export const CommentList: FC<CommentListProps> = ({ commnents }) => {
  return (
    <GenericList data={commnents}>
      {(comment) => (
        <SingleComment
          replies={comment.replies}
          message={comment.message}
          commentId={comment.id}
          postId={comment.postId}
          createdAt={comment.createdAt}
        />
      )}
    </GenericList>
  )
}
