import { PostCard } from '@elements/Card'
import { Dropdown } from '@Popper/Dropdown'
import { formatDistance } from 'date-fns'
import { FC, useEffect, useState } from 'react'
import { Post, Post as SinglePostTypes } from '../interface/post'
import * as Icons from '@icons/index'
import { AddComment, CommentList } from '@features/comments/components'
import { useDeletePost } from '../api'
import { Modal } from '@Modal/modal'
import { Button } from '@elements/Button'
import { StyledModal } from './style'
import { motion, AnimatePresence } from 'framer-motion'

interface PostProps {
  post: SinglePostTypes
}

export const SinglePost: FC<PostProps> = ({ post }) => {
  const [toggleCommentBox, setToggleCommentBox] = useState(false)
  const [deletePostModal, setDeletePostModal] = useState(false)
  const [selectPost, setSelectPost] = useState<Post>()

  // votesCount = 12

  const deletePost = useDeletePost()

  const handleDeletePost = () => {
    if (selectPost?.id) {
      deletePost.mutate({ id: selectPost?.id.toString() })
    }
  }

  const handleDeleteModal = (post: Post) => {
    setSelectPost(post)
    setDeletePostModal(true)
  }

  useEffect(() => {
    if (deletePost.isSuccess || deletePost.isError) {
      setDeletePostModal(false)
    }
  }, [deletePost.isError, deletePost.isSuccess])

  return (
    <div>
      <Modal
        isOpen={deletePostModal}
        setIsOpen={() => setDeletePostModal(false)}
      >
        <StyledModal>
          <div className="border-b">
            <Modal.Header>Delete Post {selectPost?.id}</Modal.Header>
          </div>
          <Modal.Content>Youre about to delele Post</Modal.Content>
          <Modal.Footer>
            <Button variant="danger" onClick={handleDeletePost} fullWidth>
              {deletePost.isLoading ? 'Deleting post' : 'Delete'}
            </Button>
          </Modal.Footer>
        </StyledModal>
      </Modal>
      <div className="my-2">
        <PostCard>
          <div className="w-full">
            <div className="w-full flex gap-8 justify-between">
              <div className="flex flex-col w-full">
                {/* post header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-0">
                      <span
                        className={`flex items-center justify-center text-[13px] ${
                          post.channelName === 'Religion'
                            ? 'text-blue-400 bg-blue-200'
                            : post.channelName === 'Chat'
                            ? 'text-gray-400 bg-gray-100'
                            : ''
                        } rounded-full px-[6px] py-[2px]`}
                      >
                        {`@${post.channelName?.toLocaleLowerCase()}`}
                      </span>
                    </div>
                    <span className="text-[12px] text-gray-400 inline-block">
                      {formatDistance(new Date(post.createdAt), new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <Dropdown
                    titleElement={<Icons.MoreHori />}
                    placement="bottom-end"
                    offset={{ horizontal: 0, vertical: 0 }}
                  >
                    <div className="flex justify-center items-center h-full">
                      <div
                        onClick={() => handleDeleteModal(post)}
                        className="w-[200px] px-2 flex items-center gap-2"
                      >
                        <Icons.Trash />
                        <span>Delete</span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <div className="w-[200px] px-2 flex items-center gap-2">
                        <Icons.Flag />
                        <span>Report</span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <div className="w-[200px] px-2 flex items-center gap-2">
                        <Icons.Pin />
                        <span>Pin</span>
                      </div>
                    </div>
                  </Dropdown>
                </div>

                {/* message body */}
                <div className="text-[11px] py-1 mt-2">
                  <p className="mb-1 text-lg">{post.message}</p>
                </div>

                {/* actions */}
                <div className="flex gap-1 mt-[6px] items-center">
                  <div className="flex items-center gap-[7px] justify-between h-full bg-gray-100 rounded-full px-2 py-1">
                    <button
                      aria-label="up arrow"
                      className="flex gap-[3px] items-center"
                    >
                      <Icons.ArrowUp />
                    </button>
                    <span className="text-[13px] text-gray-500">12</span>
                    <button>
                      <Icons.ArrowDown />
                    </button>
                  </div>
                  <div className="p-0">
                    <button
                      data-testId="commentHandle"
                      onClick={() => setToggleCommentBox((val) => !val)}
                      className="flex items-center gap-1 cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all"
                    >
                      <Icons.Comment />
                      <span className="text-[13px] text-gray-500">
                        {post?.comments?.length} Comments
                      </span>
                    </button>
                  </div>
                  <div className="cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                    <Icons.Share />
                  </div>
                </div>

                {/* comments section */}
                <AnimatePresence initial={false}>
                  {toggleCommentBox ? (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="flex flex-col ite h-full justify-center w-full"
                    >
                      <span className="w-full border-b my-4"></span>
                      <AddComment postId={post.id} />
                      <CommentList commnents={post.comments} />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </PostCard>
      </div>
    </div>
  )
}
