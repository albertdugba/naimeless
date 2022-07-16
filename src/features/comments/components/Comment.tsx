import { formatDistance } from 'date-fns'
import { FC, useState } from 'react'
import Gravatar from 'react-gravatar'
import * as Icons from '@icons/index'

interface CommentProps {
  message: string
  commentId: number
  postId: number
  createdAt: Date
}
export const SingleComment: FC<CommentProps> = ({
  message,
  postId,
  createdAt,
}) => {
  const [toggledInput, setToggledInput] = useState(false)
  return (
    <li className="list-none my-2">
      <div className="">
        <div className="flex gap-2">
          <Gravatar
            email={`${postId}@mail.com`}
            className="h-[20px] w-[20px] rounded-full"
          />
          <div className="flex flex-col gap-2 w-full">
            <span className="text-[12px] text-gray-400 my-0 p-0 inline-block">
              {formatDistance(new Date(createdAt), new Date(), {
                addSuffix: true,
              })}
            </span>
            <p className="text-[1rem] p-0 -mt-1">{message}</p>
            <div className="flex gap-1 mt-[6px] items-center">
              <div className="flex items-center gap-[7px] justify-between h-full bg-gray-100 rounded-full px-2 py-1">
                <button
                  aria-label="up arrow"
                  className="flex gap-[3px] items-center"
                >
                  <Icons.ArrowUp />
                </button>
                <span className="text-sm text-gray-500">12</span>
                <button>
                  <Icons.ArrowDown />
                </button>
              </div>
              <div className="p-0">
                <button
                  onClick={() => setToggledInput((prev) => !prev)}
                  className="cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all"
                >
                  <Icons.Comment />
                </button>
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                <Icons.Share />
              </div>
            </div>

            {/* replies */}
            <div className="w-full">
              {toggledInput && (
                <input
                  type="text"
                  className="border py-3 px-3 rounded-md w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
