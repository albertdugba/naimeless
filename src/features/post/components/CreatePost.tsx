import { ChangeEvent, FC, useEffect, useState } from 'react'
import Gravartar from 'react-gravatar'
import { DownArrow, People } from '@icons/index'
import { StyledModal } from './style'
import { Modal } from '@Modal/modal'
import { useCreatePost } from '../api'
import { Button } from '@elements/Button'
import * as Icons from '@icons/index'
import { AnimatePresence } from 'framer-motion'

interface CreatePostProps {
  setOpenModal: (val: boolean) => void
  openModal: boolean
}

export const CreatePost: FC<CreatePostProps> = (props) => {
  const { openModal, setOpenModal } = props
  const [inView, setInView] = useState<'channels' | 'messageText'>(
    'messageText'
  )
  const [selectedChannel, setSelectedChannel] = useState('')
  const [message, setMessage] = useState('')
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
    createPost.mutate({
      message,
      published: true,
      author: 'nbvbn',
      channelName: selectedChannel,
      userId: 1,
    })
  }

  useEffect(() => {
    if (createPost.isSuccess) {
      setOpenModal(false)
    }
  }, [createPost.isSuccess, setOpenModal])

  const handleViewMode = (channel: 'channels' | 'messageText') => {
    setInView(channel)
  }
  return (
    <>
      <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
        {inView === 'channels' ? (
          <AnimatePresence>
            <StyledModal layoutId="channels">
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
                <ul data-testid="select-options">
                  {channels.map((channel) => (
                    <li
                      aria-label={channel.val}
                      onClick={() => handleSelectChannel(channel.val)}
                      key={channel.id}
                      className={`flex items-center justify-between px-3 py-3 hover:bg-gray-200 cursor-pointer rounded-[5px] w-full transition-all my-2 ${
                        selectedChannel === channel.val ? 'bg-gray-200' : ''
                      }`}
                    >
                      <div
                        data-testid={`singleChannel-${0}`}
                        className="flex items-center gap-2"
                      >
                        <Gravartar
                          className="h-[25px] w-[25px] rounded-full"
                          email={channel.val?.toLocaleLowerCase()}
                        />
                        @{channel.val.toLocaleLowerCase()}
                      </div>
                      {selectedChannel === channel.val && <Icons.Check />}
                    </li>
                  ))}
                </ul>
              </Modal.Content>
            </StyledModal>
          </AnimatePresence>
        ) : (
          <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
            <StyledModal>
              <div className="border-b">
                <Modal.Header>
                  <div className="flex items-center justify-between w-full">
                    <span>Create Post</span>
                    <button
                      onClick={() => setOpenModal(false)}
                      arial-label="Close button icon"
                      className="flex items-center justify-center h-[35px] w-[35px] cursor-pointer bg-gray-200 rounded-full"
                    >
                      <Icons.Times color="text-gray" size={20} />
                    </button>
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
                      <span data-testid="channel">
                        @
                        {selectedChannel
                          ? selectedChannel.toLocaleLowerCase()
                          : 'select channel'.toLocaleLowerCase()}
                      </span>
                      <DownArrow />
                    </button>
                  </div>
                  <textarea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                    value={message}
                    className="outline-none w-full p-4 rounded-[6px]"
                    placeholder="Whats happening ?"
                  />
                </form>
              </Modal.Content>
              <Modal.Footer>
                <Button disabled={!message} onClick={handleAddPost} fullWidth>
                  {createPost.isLoading ? 'Sumitting post' : 'Post'}
                </Button>
              </Modal.Footer>
            </StyledModal>
          </Modal>
        )}
      </Modal>
    </>
  )
}
