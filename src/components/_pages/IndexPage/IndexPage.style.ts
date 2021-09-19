import styled from 'styled-components'
import { H1 } from '@blueprintjs/core'

export const PageTitle = styled(H1)`
  position: absolute;
  z-index: 3;
  font-size: 50px !important;
  line-height: 50px !important;
  text-align: center;
  text-shadow: #000000 0px 5px 5px;
  -webkit-font-smoothing: antialiased;
  @media only screen and (max-width: 420px) {
    font-size: 30px !important;
    line-height: 30px !important;
  }
`
