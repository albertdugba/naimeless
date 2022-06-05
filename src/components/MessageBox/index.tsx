import { ChangeEvent, FunctionComponent } from 'react'
import Gravartar from 'react-gravatar'

interface Props {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
}

export const MessageBox: FunctionComponent<Props> = ({ onChange, value }) => {
  return (
    <div>
      <Gravartar
        className="h-[45px] w-[45px] rounded-full"
        email="ama@duncan.com"
      />
      <textarea
        onChange={onChange}
        value={value}
        className="outline-none w-full p-4 rounded-[6px]"
        placeholder="Whats happening ?"
      />
    </div>
  )
}
