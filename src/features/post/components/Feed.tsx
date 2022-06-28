import { useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import { formatDistance } from 'date-fns'
import { useGetAllPosts } from '@features/post/api'
import { useDeletePost } from '@features/post/api'
import { Post } from '../interface/post'
import { Modal } from '@Modal/modal'
import { StyledModal } from './style'
import { Button } from '@elements/Button'
import { PostCard } from '@elements/Card'
import { getLayout } from '@layout'
import * as Icons from '@icons/index'
import { CreatePost } from './CreatePost'
import { GenericList } from '@List'
import { Dropdown } from '@Popper/Dropdown'

export const Feed = () => {
  const [openModal, setOpenModal] = useState(false)
  const [deletePostModal, setDeletePostModal] = useState(false)
  const [selectPost, setSelectPost] = useState<Post>()
  const { post: allPosts, isLoading, isSuccess } = useGetAllPosts()
  console.log(allPosts)

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
        <CreatePost openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div className="flex items-center gap-4 bg-white p-6 rounded-[6px] border mt-8">
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
        : isSuccess && (
            <div>
              <GenericList data={allPosts}>
                {(post) => (
                  <div key={post.id} className="my-3">
                    <PostCard>
                      <div className="w-full">
                        <div className="w-full flex gap-8 justify-between">
                          <div className="flex flex-col w-full">
                            {/* post header */}
                            <div className="flex items-center justify-between">
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
                              <Dropdown
                                titleElement={<Icons.MoreHori />}
                                placement="bottom-end"
                                offset={{ horizontal: 0, vertical: 0 }}
                              >
                                <div className="flex justify-center items-center h-full">
                                  <div className="w-[200px] px-2">Delete</div>
                                </div>
                                <div className="flex justify-center items-center h-full">
                                  <div className="w-[200px] px-2">Report</div>
                                </div>
                                <div className="flex justify-center items-center h-full">
                                  <div className="w-[200px] px-2">Save</div>
                                </div>
                              </Dropdown>
                            </div>

                            {/* message body */}
                            <div className="text-[11px] py-1 mt-2">
                              <p className="mb-1">{post.message}</p>
                              <div className="w-full border">
                                {post.photos?.length
                                  ? post?.photos?.map((photo) => (
                                      <img
                                        key={photo.id}
                                        src={photo.url}
                                        alt="post"
                                        className="rounded-lg w-full"
                                      />
                                    ))
                                  : null}
                              </div>
                            </div>

                            {/* actions */}
                            <div className="flex gap-1 mt-[6px] items-center">
                              <div className="flex items-center gap-[7px] justify-between h-full bg-gray-100 rounded-full px-2 py-1">
                                <button className="flex gap-[3px] items-center">
                                  <Icons.ArrowUp />
                                </button>
                                <span className="text-sm text-gray-500">
                                  12
                                </span>
                                <button>
                                  <Icons.ArrowDown />
                                </button>
                              </div>
                              <div className="p-0">
                                <div className="cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                                  <Icons.Comment />
                                </div>
                              </div>
                              <div className="cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                                <Icons.Share />
                              </div>
                              {/* <button onClick={() => handleDeleteModal(post)}>
                                <Icons.MoreHori />
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </PostCard>
                  </div>
                )}
              </GenericList>
            </div>
          )}
    </>
  )
}

Feed.getLayout = getLayout
