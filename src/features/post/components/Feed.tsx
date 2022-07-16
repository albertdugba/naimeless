import { useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import { formatDistance } from 'date-fns'
import {
  useGetAllPosts,
  useGetSinglePost,
  useUpvotePost,
} from '@features/post/api'
import { useDeletePost } from '@features/post/api'
import { Post } from '../interface/post'
import { Modal } from '@Modal/modal'
import { StyledModal } from './style'
import { Button } from '@elements/Button'
import { PostCard } from '@elements/Card'
import { getLayout } from '@layout'
import { CreatePost } from './CreatePost'
import { motion, AnimatePresence } from 'framer-motion'
import { Posts } from '.'

export const Feed = () => {
  const [openModal, setOpenModal] = useState(false)
  const [deletePostModal, setDeletePostModal] = useState(false)
  const [selectPost, setSelectPost] = useState<Post>()
  const [postModal, setPostModal] = useState(false)

  const { post: allPosts, isLoading, isSuccess } = useGetAllPosts()
  const postId = Number(selectPost?.id)
  const post = useGetSinglePost(postId)

  console.log('allPosts', allPosts)

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
    <>
      <div>
        <Modal isOpen={postModal} setIsOpen={() => setPostModal(false)}>
          <StyledModal>
            <div className="border-b">
              <Modal.Header>Post {selectPost?.id}</Modal.Header>
            </div>
            <Modal.Content>
              {post.isLoading
                ? 'loading'
                : post.isSuccess
                ? post?.data?.message
                : ''}
            </Modal.Content>
          </StyledModal>
        </Modal>
        <CreatePost openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div className="flex items-center gap-4 bg-white p-6 rounded-[8px] mt-6 border">
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
      <AnimatePresence>
        <motion.div layout>
          {isLoading
            ? 'loading'
            : isSuccess && (
                <motion.div>
                  <Posts posts={allPosts} />
                </motion.div>
              )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

Feed.getLayout = getLayout
