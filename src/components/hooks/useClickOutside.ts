/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect, useRef } from 'react'

type UseHandleClickOutside = {
  ref: RefObject<HTMLDivElement>
}

export const useHandleClickOutside = (
  callback: (...args: any[]) => void
): UseHandleClickOutside => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        callback.apply(null, [false])
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [callback])
  return { ref }
}
