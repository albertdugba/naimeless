import type { ReactNode, FunctionComponent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

type TabProps = {
  href: string
  children: ReactNode
  className?: string
  as?: string
}
export const TabLink: FunctionComponent<TabProps> = ({
  href,
  children,
  className,
  as,
}) => {
  const router = useRouter()

  return (
    <Link href={href} as={as} passHref>
      <ActiveLink
        activeLink={router.pathname === href ? '#000' : 'none'}
        textActiveColor={router.pathname === href ? '#000' : '#f1f1f1'}
        className={className}
      >
        {children}
      </ActiveLink>
    </Link>
  )
}

type ActiveLink = {
  activeLink?: string
  hoverLink?: string
  textActiveColor?: string
}

const ActiveLink = styled.a<ActiveLink>`
  color: ${(props) => props.textActiveColor};
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover ::after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    bottom: -0.6rem;
    left: 0;
    right: 0;
    background: ${(props) => props.hoverLink};
  }

  &:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    bottom: -0.75rem;
    left: 0;
    right: 0;
    background: ${(props) => props.activeLink};
  }
`
