import { ReactNode } from 'react'

export const PostCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-[20px] rounded-[6px] bg-white border">{children}</div>
  )
}
