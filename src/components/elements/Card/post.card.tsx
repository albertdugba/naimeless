import { ReactNode } from 'react'

export const PostCard = ({ children }: { children: ReactNode }) => {
  return <div className="p-4 rounded-[6px] bg-white border">{children}</div>
}
