import { CardContainer } from './card.styled'
import { useMemo } from 'react'
import { FC, ReactNode } from 'react'
import { createContext } from 'react'

interface SharedCardTypes {
  children: ReactNode
}

interface ComposedCards {
  Header: FC<SharedCardTypes>
  Body: FC<SharedCardTypes>
  Actions: FC<SharedCardTypes>
}

interface CardContextProps {
  toggleCard: boolean
  setToggleCard: (value: boolean) => void
  children?: SharedCardTypes['children']
}
export const CardContext = createContext<CardContextProps>(undefined)

export const Card: FC<CardContextProps> & ComposedCards = ({
  children,
  toggleCard,
  setToggleCard,
}) => {
  const memoisedValue = useMemo(
    () => ({ toggleCard, setToggleCard }),
    [toggleCard, setToggleCard]
  )

  return (
    <CardContext.Provider value={memoisedValue}>
      <CardContainer>{children}</CardContainer>
    </CardContext.Provider>
  )
}

const CardHeader = ({ children }: SharedCardTypes) => {
  return <>{children}</>
}

const CardBody = ({ children }: SharedCardTypes) => {
  return <>{children}</>
}

const CardActions = ({ children }: SharedCardTypes) => {
  return <>{children}</>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Actions = CardActions
