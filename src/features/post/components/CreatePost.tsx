import { ChangeEvent, FunctionComponent, useState } from 'react'
import Gravartar from 'react-gravatar'
import { DownArrow, People } from '@icons/index'
import { StyledModal } from './style'
import { Modal } from '@Modal/modal'
import { useCreatePost } from '../api'
import { Button } from '@elements/Button'
import * as Icons from '@icons/index'

interface CreatePostProps {
  setOpenModal: (val: boolean) => void
  openModal: boolean
}

export const CreatePost: FunctionComponent<CreatePostProps> = (props) => {
  const { openModal, setOpenModal } = props
  const [inView, setInView] = useState<'channels' | 'messageText'>()
  const [selectedChannel, setSelectedChannel] = useState('')
  const [input, setInput] = useState('')
  const createPost = useCreatePost()

  const channels = [
    {
      id: 1,
      val: 'General',
    },
    {
      id: 2,
      val: 'Main',
    },
    {
      id: 3,
      val: 'Chat',
    },
    {
      id: 4,
      val: 'Religion',
    },
  ]

  const handleSelectChannel = (channel: string) => {
    setSelectedChannel(channel)
    setInView('messageText')
  }

  const handleAddPost = () => {
    createPost.mutate({ message: input, published: true, author: 'nbvbn' })
  }

  const handleViewMode = (channel: 'channels' | 'messageText') => {
    setInView(channel)
  }
  return (
    <>
      {inView === 'channels' ? (
        <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
          <StyledModal>
            <div className="border-b">
              <Modal.Header>
                <div className="flex items-center justify-between w-full">
                  <button
                    onClick={() => setInView('messageText')}
                    className="flex items-center justify-center h-[35px] w-[35px] cursor-pointer bg-gray-200 rounded-full"
                  >
                    <Icons.ArrowLeft />
                  </button>
                  <span>Select Channel</span>
                </div>
              </Modal.Header>
            </div>
            <Modal.Content>
              <ul>
                {channels.map((channel) => (
                  <li
                    className={`px-3 py-2 hover:bg-gray-200 cursor-pointer ${
                      selectedChannel === channel.val ? 'bg-gray-200' : ''
                    } rounded-[7px] w-full transition-all my-2`}
                    onClick={() => handleSelectChannel(channel.val)}
                    key={channel.id}
                  >
                    {channel.val}
                  </li>
                ))}
              </ul>
            </Modal.Content>
            <Modal.Footer>
              <Button disabled onClick={handleAddPost} fullWidth>
                {createPost.isLoading ? 'Sumitting post' : 'Post'}
              </Button>
            </Modal.Footer>
          </StyledModal>
        </Modal>
      ) : (
        <div>
          <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
            <StyledModal>
              <div className="border-b">
                <Modal.Header>
                  <div className="flex items-center justify-between w-full">
                    <span>Create Post</span>
                    <div className="flex items-center justify-center h-[35px] w-[35px] cursor-pointer bg-gray-200 rounded-full">
                      <Icons.Times color="text-gray" size={20} />
                    </div>
                  </div>
                </Modal.Header>
              </div>
              <Modal.Content>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="flex items-center gap-3">
                    <Gravartar
                      className="h-[45px] w-[45px] rounded-full"
                      email="ama@duncan.com"
                    />

                    <button
                      onClick={() => handleViewMode('channels')}
                      arial-label="Channel dropdown"
                      className="flex text-[12px] items-center gap-[5px] bg-purple-200 p-[4px] rounded-[4px] cursor-pointer"
                    >
                      <People />
                      <span>{selectedChannel}</span>
                      <DownArrow />
                    </button>
                  </div>
                  <textarea
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className="outline-none w-full p-4 rounded-[6px]"
                    placeholder="Whats happening ?"
                  />
                </form>
              </Modal.Content>
              <Modal.Footer>
                <Button disabled onClick={handleAddPost} fullWidth>
                  {createPost.isLoading ? 'Sumitting post' : 'Post'}
                </Button>
              </Modal.Footer>
            </StyledModal>
          </Modal>
        </div>
      )}
    </>
  )
}
