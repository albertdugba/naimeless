import { GenericList } from '@List'
import { FunctionComponent } from 'react'
import { Comments } from '../interface/comment'
import { SingleComment } from './Comment'

interface CommentListProps {
  commnents: Comments[]
}
export const CommentList: FunctionComponent<CommentListProps> = ({
  commnents,
}) => {
  return (
    <GenericList data={commnents}>
      {(comment) => (
        <SingleComment
          message={comment.message}
          commentId={comment.id}
          postId={comment.postId}
          createdAt={comment.createdAt}
        />
      )}
    </GenericList>
  )
}
