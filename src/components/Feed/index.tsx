import { PostCard } from '../elements/Card'
import { getLayout } from '../layout'
import Gravatar from 'react-gravatar'
import * as Icons from '../../../public/icons'
import { useState } from 'react'
import { Modal } from '../Modal/context'
import { TextField } from '../elements/Form'
import { StyledModal } from './styled'
import { Button } from '../elements/Button'
import { MessageBox } from '../MessageBox'

export const Feed = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
        <StyledModal>
          <div className="border-b">
            <Modal.Header onClose={() => setOpenModal(false)}>
              Create Post
            </Modal.Header>
          </div>
          <Modal.Content>
            <MessageBox />
          </Modal.Content>
          <Modal.Footer>
            <Button fullWidth>Post</Button>
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
      {new Array(10).fill(
        <div className="mt-3">
          <PostCard>
            <div className="flex gap-3 w-full">
              <Gravatar
                email="hello@support.com"
                className="w-[35px] h-[35px] rounded-full"
              />

              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-400">anon</span>
                    <span className="text-[12px] text-gray-400">4hrs ago</span>
                  </div>
                </div>

                <div className="py-1 text-[11px]">
                  <p>
                    Chale what dey go on ?? Chale what dey go on ?? Chale what
                    dey
                  </p>
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
                  <Icons.MoreHori />
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
      )}
    </>
  )
}

Feed.getLayout = getLayout
