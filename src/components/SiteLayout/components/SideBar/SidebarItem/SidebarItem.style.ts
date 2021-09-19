import { Callout } from '@blueprintjs/core'
import styled from 'styled-components'
import { getSpacing } from '../../../../../stylesheet'

export const SidebarItemContainer = styled(Callout)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${getSpacing(2)};
  cursor: pointer;
`

export const SidebarItemLogo = styled.img`
  position: absolute;
  padding: ${getSpacing(1.5)};
  left: 0;
  width: 20%;
`

export const SidebarItemText = styled.div<{ icon: boolean }>`
  height: 100%;
  width: 100%;
  margin-left: ${({ icon }) => (icon ? 0 : getSpacing(5))};
  font-size: small;
  text-align: center;
`
