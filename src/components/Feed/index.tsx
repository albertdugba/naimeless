import { PostCard } from '../elements/Card'
import { getLayout } from '../layout'
import Gravatar from 'react-gravatar'
import * as Icons from '../../../public/icons'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal/context'
import { StyledModal } from './styled'
import { Button } from '../elements/Button'
import { MessageBox } from '../MessageBox'
import axios from 'axios'
import { useQuery } from 'react-query'
import {
  useCreatePost,
  useDeletePost,
} from '../../features/post/api/react-query'
import { Post } from '@prisma/client'

export const Feed = () => {
  const [openModal, setOpenModal] = useState(false)
  const [deletePostModal, setDeletePostModal] = useState(false)
  const [selectPost, setSelectPost] = useState<Post>()
  const [input, setInput] = useState('')
  const createPost = useCreatePost()
  const deletePost = useDeletePost()
  const { data, isLoading, isSuccess } = useQuery<Post[]>('posts', () =>
    axios.get('/api/posts').then((res) => res.data)
  )

  const handleAddPost = () => {
    createPost.mutate({ message: input, published: true, author: 'emily' })
  }
  const handleDeletePost = () => {
    if (selectPost?.id) {
      deletePost.mutate(selectPost?.id)
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
      <div className="flex items-center gap-4 bg-white p-6 rounded-[6px] border">
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
          data.map((post) => (
            <div key={post.id} className="my-3">
              <PostCard>
                <div className="flex gap-3 w-full">
                  <Gravatar
                    email={`${post.author?.toLowerCase()}@mail.com`}
                    className="w-[35px] h-[35px] rounded-full"
                  />

                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-gray-400">anon</span>
                        <span className="text-[12px] text-gray-400">
                          4hrs ago
                        </span>
                      </div>
                    </div>

                    <div className="py-1 text-[11px]">
                      <p>{post.message}</p>
                    </div>

                    {/* actions */}
                    <div className="flex gap-8 mt-[6px] items-center">
                      <div className="flex gap-2 items-center cursor-pointer">
                        <Icons.Comment />
                        <span className="text-[9px]">Comments</span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer">
                        <Icons.Share />
                        <span className="text-[9px]">Share</span>
                      </div>
                      <button onClick={() => handleDeleteModal(post)}>
                        <Icons.MoreHori />
                      </button>
                    </div>
                  </div>
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
              </PostCard>
            </div>
          ))}
    </>
  )
}

Feed.getLayout = getLayout
