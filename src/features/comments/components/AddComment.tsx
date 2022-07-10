import { ChangeEvent, FC, useState } from 'react'
import { Button } from '@elements/Button'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

interface Props {
  postId: number
}
export const AddComment: FC<Props> = ({ postId }) => {
  const [commentVal, setCommentVal] = useState('')
  const queryClient = useQueryClient()
  const addComment = (
    postId: string | number,
    data: { message: string; postId: number }
  ) =>
    axios({ method: 'POST', url: `/api/posts/${postId}/create-comments`, data })

  const handleAddComment = useMutation(
    (variables: { message: string; postId: number }) =>
      addComment(variables.postId, variables),
    {
      onSuccess: () => {
        queryClient.invalidateQueries()
      },
    }
  )
  return (
    <div className="flex items-center w-full gap-2">
      <input
        type="text"
        value={commentVal}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCommentVal(e.target.value)
        }
        className="border px-2 py-2 rounded-md w-full outline-none text-gray-500"
      />
      <Button
        variant="primary"
        size="small"
        onClick={() => handleAddComment.mutate({ message: commentVal, postId })}
      >
        <div className="whitespace-nowrap px-4 py-1">Add comment</div>
      </Button>
    </div>
  )
}
