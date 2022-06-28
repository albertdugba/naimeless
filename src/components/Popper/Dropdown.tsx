/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from 'react'
import { usePopper } from 'react-popper'
import { Placement } from '@popperjs/core'
import { useHandleClickOutside } from '@hooks/useClickOutside'
import { DropDownContainer, DropdownItem } from './styled'

interface DropdownProps {
  children: ReactNode
  titleElement: ReactElement
  placement?: Placement
  offset: {
    horizontal: number
    vertical: number
  }
}
export const Dropdown: FunctionComponent<DropdownProps> = ({
  titleElement: TitleElement = <h1>Click</h1>,
  placement = 'bottom',
  offset = { horizontal: 0, vertical: 0 },
  children,
}) => {
  const [open, setOpen] = useState(false)
  const referenceElement = useRef<any>(null)
  const popperRef = useRef(null)

  const { ref: dropdownRef } = useHandleClickOutside(setOpen)
  const toggle = () => setOpen((open) => !open)
  const { horizontal, vertical } = offset
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperRef.current,
    {
      placement,
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [horizontal, vertical],
          },
        },
      ],
    }
  )

  const handleDropdownClick = (e: any) => {
    e.preventDefault()
    toggle()
  }
  return (
    <div ref={dropdownRef}>
      <button ref={referenceElement} onClick={handleDropdownClick}>
        {TitleElement}
      </button>
      <div ref={popperRef} style={styles.popper} {...attributes.popper}>
        <DropDownContainer style={styles.offset} open={open}>
          {children &&
            React.Children.map(children, (child) => (
              <DropdownItem>{child}</DropdownItem>
            ))}
        </DropDownContainer>
      </div>
    </div>
  )
}
