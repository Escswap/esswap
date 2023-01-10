import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../theme'
import {Phone, Twitter} from 'react-feather'

const MenuItem = styled(ExternalLink)`
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
`
export function Bottom() {

  return (
    <MenuFlyout>
    <MenuItem id="link" href="https://twitter.com/ESwap_official?t=xCZTWbcuucWSUBseSewD0Q&s=09">
      <Twitter size={14} /> Twitter
     </MenuItem>
     <MenuItem id="link" href="https://t.me/Eswap_official">
      <Phone size={14} /> Telegram
     </MenuItem>

    </MenuFlyout>
  )
}
