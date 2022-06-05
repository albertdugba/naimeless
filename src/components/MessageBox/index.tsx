import Gravartar from 'react-gravatar'
export const MessageBox = () => {
  return (
    <div>
      <Gravartar
        className="h-[45px] w-[45px] rounded-full"
        email="ama@duncan.com"
      />
      <textarea
        className="outline-none w-full p-4 rounded-[6px]"
        placeholder="Whats happening ?"
      />
    </div>
  )
}
