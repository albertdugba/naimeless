import { useState } from 'react'
import Gravatar from 'react-gravatar'
import { useGetAllPosts, useGetSinglePost } from '@features/post/api'
import { Post } from '../interface/post'
import { Modal } from '@Modal/modal'
import { StyledModal } from './style'
import { getLayout } from '@layout'
import { CreatePost } from './CreatePost'
import { motion, AnimatePresence } from 'framer-motion'
import { Posts } from '.'
import { randomBgColorGenerator } from 'src/lib/server/helpers'

export const Feed = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectPost, setSelectPost] = useState<Post>()
  const [postModal, setPostModal] = useState(false)

  const { post: allPosts, isLoading, isSuccess } = useGetAllPosts()
  const postId = Number(selectPost?.id)
  const post = useGetSinglePost(postId)

  const colors = ['red', 'blue', 'teal', 'orange']
  const colours = randomBgColorGenerator(colors)
  console.log('colours', colours)

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
      <div
        style={{ boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.14)' }}
        className="flex items-center gap-4 ml-1 mr-1 bg-white p-6 rounded-[8px] mt-8 border"
      >
        <Gravatar
          email="discord.com"
          className="w-[40px] h-[40px] rounded-full"
        />
        <input
          type="text"
          placeholder="Whats going on"
          arial-label="Create Post"
          autoFocus={false}
          onClick={() => setOpenModal(true)}
          className="px-3 py-3 rounded-full w-full outline-none bg-gray-100 cursor-pointer"
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
