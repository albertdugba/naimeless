import { useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import { formatDistance } from 'date-fns'
import { useCreatePost, useGetAllPosts } from '@features/post/api'
import { useDeletePost } from '@features/post/api'
import { Post } from '../interface/post'
import { Modal } from '@/Modal/modal'
import { StyledModal } from './index.style'
import { Button } from '@/elements/Button'
import { MessageBox } from '@/MessageBox'
import { PostCard } from '@/elements/Card'
import { getLayout } from '@/layout'
import * as Icons from '@icons/index'

export const Feed = () => {
  const [openModal, setOpenModal] = useState(false)
  const [deletePostModal, setDeletePostModal] = useState(false)
  const [selectPost, setSelectPost] = useState<Post>()
  const [input, setInput] = useState('')
  const { post, isLoading, isSuccess, isError } = useGetAllPosts()

  const createPost = useCreatePost()
  const deletePost = useDeletePost()

  const handleAddPost = () => {
    createPost.mutate({ message: input, published: true, author: 'nbvbn' })
  }

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
    if (createPost.isSuccess || createPost.isError) {
      setOpenModal(false)
    }

    if (deletePost.isSuccess || deletePost.isError) {
      setDeletePostModal(false)
    }
  }, [
    createPost.isError,
    createPost.isSuccess,
    deletePost.isError,
    deletePost.isSuccess,
  ])
  return (
    <>
      <div>
        <Modal
          isOpen={deletePostModal}
          setIsOpen={() => setDeletePostModal(false)}
        >
          <StyledModal>
            <div className="border-b">
              <Modal.Header onClose={() => setDeletePostModal(false)}>
                Delete Post {selectPost?.id}
              </Modal.Header>
            </div>
            <Modal.Content>Youre about to delele Post</Modal.Content>
            <Modal.Footer>
              <Button variant="danger" onClick={handleDeletePost} fullWidth>
                {deletePost.isLoading ? 'Deleting post' : 'Delete'}
              </Button>
            </Modal.Footer>
          </StyledModal>
        </Modal>
        <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
          <StyledModal>
            <div className="border-b">
              <Modal.Header onClose={() => setOpenModal(false)}>
                Create Post
              </Modal.Header>
            </div>
            <Modal.Content>
              <form onSubmit={(e) => e.preventDefault()}>
                <MessageBox
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </form>
            </Modal.Content>
            <Modal.Footer>
              <Button onClick={handleAddPost} fullWidth>
                {createPost.isLoading ? 'Sumitting post' : 'Post'}
              </Button>
            </Modal.Footer>
          </StyledModal>
        </Modal>
      </div>
      <div className="flex items-center gap-4 bg-white p-6 rounded-[6px] border -mt-10">
        <Gravatar
          email="discord.com"
          className="w-[40px] h-[40px] rounded-full"
        />
        <input
          type="text"
          placeholder="Whats going on"
          autoFocus={false}
          onClick={() => setOpenModal(true)}
          className="px-2 py-3 rounded-full w-full outline-none bg-gray-100 cursor-pointer"
        />
      </div>
      {isLoading
        ? 'loading'
        : isSuccess &&
          post?.map((post) => (
            <div key={post.id} className="my-3">
              <PostCard>
                <div className="w-full">
                  <div className="w-full flex gap-8 justify-between">
                    <div className="flex flex-col w-full">
                      {/* post header */}
                      <div className="flex items-center gap-2">
                        <div className="p-0">
                          <span className="flex items-center justify-center text-[10px] text-blue-400 bg-blue-200 rounded-full px-[6px] py-[2px]">
                            {`@${post.channelName}`}
                          </span>
                        </div>
                        <span className="text-[9px] text-gray-400 inline-block">
                          {formatDistance(
                            new Date(post.createdAt),
                            new Date(),
                            { addSuffix: true }
                          )}
                        </span>
                      </div>

                      {/* message body */}
                      <div className="text-[11px] py-1 mt-2">
                        <p className="mb-1">{post.message}</p>
                        <div className="w-full">
                          {post.photos?.length
                            ? post?.photos?.map((photo) => (
                                <img
                                  key={photo.id}
                                  src={photo.url}
                                  alt="post"
                                  className="rounded-lg w-1/2"
                                />
                              ))
                            : null}
                        </div>
                      </div>

                      {/* actions */}
                      <div className="flex gap-1 mt-[6px] items-center">
                        <div className="p-0">
                          <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                            <Icons.Comment />
                            <span className="text-[9px]">Comments</span>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                          <Icons.Share />
                          <span className="text-[9px]">Share</span>
                        </div>
                        <button onClick={() => handleDeleteModal(post)}>
                          <Icons.MoreHori />
                        </button>
                      </div>
                    </div>

                    {/* upvote and downvote */}
                    <div className="flex flex-col items-center justify-between h-full">
                      <button>
                        <Icons.ChevronUp />
                      </button>
                      <span className="flex items-end">0</span>
                      <button>
                        <Icons.ChevronDown />
                      </button>
                    </div>
                  </div>
                </div>
              </PostCard>
            </div>
          ))}
    </>
  )
}

Feed.getLayout = getLayout
