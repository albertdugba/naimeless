import { FC, ReactElement, ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div>qwedef{children}</div>
}

export const getAuthLayout = (page: ReactElement) => <>{page}</>
