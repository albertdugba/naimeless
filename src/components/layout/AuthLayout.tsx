import { FC, ReactElement, ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}
