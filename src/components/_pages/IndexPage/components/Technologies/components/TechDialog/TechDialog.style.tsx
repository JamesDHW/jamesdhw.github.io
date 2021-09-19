import { Callout } from '@blueprintjs/core'
import styled from 'styled-components'
import { getSpacing } from '../../../../../../../stylesheet'

export const StyledCallout = styled(Callout)`
  margin: ${getSpacing(5)};
  margin-top: ${getSpacing(25)};
`

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DialogLogoContainer = styled(Callout)`
  display: flex;
  width: 100%;
  padding: ${getSpacing(5)};
  justify-content: center;
`

export const DialogContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${getSpacing(3)};
  justify-content: space-between;
  align-items: center;
`
