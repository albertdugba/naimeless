import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Button } from '@elements/Button'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import Gravatar from 'react-gravatar'
import { randomBgColorGenerator } from 'src/lib/server/helpers'

interface Props {
  postId: number
}
export const AddComment: FC<Props> = ({ postId }) => {
  const [commentVal, setCommentVal] = useState('')
  const randColor = randomBgColorGenerator(['purple', 'pink', 'teal', 'orange'])
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

  useEffect(() => {
    if (handleAddComment.isSuccess) {
      setCommentVal('')
    }
  }, [handleAddComment.isSuccess])
  return (
    <div className="flex gap-2">
      <div
        style={{
          backgroundColor: randColor,
          height: 35,
          width: 35,
          borderRadius: '100%',
        }}
      />
      <div className="flex flex-col w-full gap-2">
        <textarea
          value={commentVal}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setCommentVal(e.target.value)
          }
          className="border px-2 py-4 rounded-md w-full outline-none text-gray-500"
        />
        <div className="flex justify-end">
          <Button
            variant="primary"
            size="small"
            onClick={() =>
              handleAddComment.mutate({ message: commentVal, postId })
            }
          >
            <div className="whitespace-nowrap px-4 py-1">Post comment</div>
          </Button>
        </div>
      </div>
    </div>
  )
}
