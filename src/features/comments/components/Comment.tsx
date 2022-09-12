import { formatDistance } from 'date-fns'
import { ChangeEvent, FC, useState } from 'react'
import * as Icons from '@icons/index'
import { Reply } from '../interface/comment'
import { Button } from '@elements/Button'
import { useAddCommentReply } from '@features/replies/api/addReply'
import { motion, AnimatePresence } from 'framer-motion'
import { useGetProfile } from '@features/post/user/api'
import { IUser } from '@features/post/user/interface'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Avatar } from '@Avatar'

interface CommentProps {
  message: string
  commentId: number
  postId: number
  createdAt: Date
  replies: Reply[]
  user: IUser
}
export const SingleComment: FC<CommentProps> = ({
  message,
  user,
  createdAt,
  replies,
  commentId,
}) => {
  const [toggledInput, setToggledInput] = useState(false)
  const [reply, setReply] = useState('')
  const [viewMoreReplies, setViewMoreReplies] = useState(false)
  const createReply = useAddCommentReply()
  const { user: userProfile } = useGetProfile()

  const router = useRouter()

  const handleAddReply = () => {
    createReply.mutate({ body: reply, commentId })
  }

  return (
    <AnimatePresence initial={false}>
      <motion.li
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ duration: 0.8 }}
        className="list-none my-2 relative"
      >
        <div className="">
          <div className="flex gap-2">
            <Avatar avatarColor={user?.avatarColor} />

            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">User</span>
                <span className="h-[3px] w-[3px] rounded-full bg-gray-400"></span>
                <span className="text-[12px] text-gray-400 my-0 p-0 inline-block">
                  {formatDistance(new Date(createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div className="relative commentList">
                {/* comment body */}
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
                <div className="w-full flex-col flex mt-2 gap-4">
                  {toggledInput && (
                    <div className="flex gap-3 w-full">
                      <Avatar avatarColor="deepblue" />
                      <div className="flex flex-col w-full gap-2">
                        <textarea
                          value={reply}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setReply(e.target.value)
                          }
                          className="border px-2 py-4 rounded-md w-full outline-none text-gray-500"
                        />
                        <div className="flex gap-3 justify-end">
                          <Button
                            onClick={() => setToggledInput(false)}
                            variant="outlined"
                            size="small"
                          >
                            <div className="whitespace-nowrap px-4 py-1">
                              Cancel
                            </div>
                          </Button>
                          <Button
                            onClick={handleAddReply}
                            variant="primary"
                            size="small"
                          >
                            <div className="whitespace-nowrap px-4 py-1">
                              {createReply.isLoading ? 'Replying...' : 'Reply'}
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* replies */}
                  <div className="replies">
                    {replies.length ? (
                      <button
                        onClick={() => setViewMoreReplies((val) => !val)}
                        className="text-purple-600 font-bold"
                      >
                        {`${
                          viewMoreReplies
                            ? `Hide ${replies.length} replies`
                            : `View ${replies.length} replies`
                        }`}
                      </button>
                    ) : null}

                    <AnimatePresence>
                      {viewMoreReplies
                        ? replies.map((reply) => (
                            <motion.li
                              key={`content ${reply.id}`}
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0 },
                              }}
                              transition={{
                                duration: 0.8,
                                ease: [0.04, 0.62, 0.23, 0.98],
                              }}
                              className="flex flex-col gap-2 text-[1rem] my-2"
                            >
                              <div className="flex gap-2">
                                <div
                                  style={{
                                    backgroundColor: user?.avatarColor,
                                    height: '20',
                                    width: 20,
                                    borderRadius: '50%',
                                  }}
                                />
                                <span className="text-[12px] text-gray-400 my-0 p-0 inline-block">
                                  {formatDistance(
                                    new Date(reply?.createdAt),
                                    new Date(),
                                    {
                                      addSuffix: true,
                                    }
                                  )}
                                </span>
                              </div>
                              <p className="my-0 p-0 inline-block pl-7">
                                {reply.body}
                              </p>
                            </motion.li>
                          ))
                        : null}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.li>
    </AnimatePresence>
  )
}
