import { ReactNode } from 'react'

interface ListProps<T> {
  data: T[]
  children: (item: T) => ReactNode
}
interface Id {
  id: string | number
}

export const GenericList = <T extends Id>({ children, data }: ListProps<T>) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{children(item)}</div>
      ))}
    </div>
  )
}
