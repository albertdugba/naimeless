import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useGetProfile } from '@/features/post/user/api'
import { Avatar } from '@/ui/avatar'
import { Button } from '@/ui/button'

interface Props {
  postId: number
}
export const AddComment: FC<Props> = ({ postId }) => {
  const [commentVal, setCommentVal] = useState('')
  const { user } = useGetProfile()
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
      <Avatar avatarColor={user?.avatarColor} />

      <div className="flex flex-col w-full gap-2">
        <textarea
          value={commentVal}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setCommentVal(e.target.value)
          }
          className="border px-2 py-4 rounded-md w-full outline-none text-gray-500"
        />
        <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <Button size="xs" clear>
              <div className="whitespace-nowrap px-4 py-1 text-white">
                Cancel
              </div>
            </Button>
            <Button
              size="xs"
              onClick={() =>
                handleAddComment.mutate({ message: commentVal, postId })
              }
            >
              <div className="whitespace-nowrap px-4 py-1 text-white">
                Post comment
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
