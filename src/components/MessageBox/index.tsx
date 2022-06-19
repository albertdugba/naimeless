import { ChangeEvent, FunctionComponent, useState } from 'react'
import Gravartar from 'react-gravatar'
import { DownArrow, People } from '@icons/index'

interface Props {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onSelectChannel: (channel: string) => void
  channels: string[]
  value: string
}

export const MessageBox: FunctionComponent<Props> = (props) => {
  const [inView, setInView] = useState<'channels' | 'messageText'>()
  const [selectedChannel, setSelectedChannel] = useState('')
  const { onChange, onSelectChannel, channels, value } = props

  const handleSelectChannel = (channel: string) => {
    setSelectedChannel(channel)
  }

  const handleViewChannel = (mode: 'channels' | 'messageText') => {
    setInView('channels')
  }
  return (
    <>
      {inView === 'channels' ? (
        <div>
          <div className="flex items-center gap-3"></div>
          <textarea
            onChange={onChange}
            value={value}
            className="outline-none w-full p-4 rounded-[6px]"
            placeholder="Whats happening ?"
          />
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-3">
            <Gravartar
              className="h-[45px] w-[45px] rounded-full"
              email="ama@duncan.com"
            />

            <button
              onClick={() => handleViewChannel('channels')}
              arial-label="Channel dropdown"
              className="flex text-[12px] items-center gap-[5px] bg-purple-200 p-[4px] rounded-[4px] cursor-pointer"
            >
              <People />
              <span>{selectedChannel}</span>
              <DownArrow />
            </button>
          </div>
          <textarea
            onChange={onChange}
            value={value}
            className="outline-none w-full p-4 rounded-[6px]"
            placeholder="Whats happening ?"
          />
        </div>
      )}
    </>
  )
}
