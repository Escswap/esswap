import React from 'react'
import styled from 'styled-components'

const MenuItem = styled.div`
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
`
const MenuFlyout = styled.span`
  min-width: 8.125rem;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  z-index: 100;
`
export function Contact() {

  return (
    <MenuFlyout>
     <MenuItem className='contact us'>
     Contact us
     </MenuItem>

    </MenuFlyout>
  )
}
