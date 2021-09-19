import { Card, H3 } from '@blueprintjs/core'
import styled from 'styled-components'
import { getSpacing } from '../../../../stylesheet'

export const StyledCard = styled(Card)`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  min-height: 500px;
  padding-top: ${getSpacing(25)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    padding-top: 0;
    position: relative;
    justify-content: space-around;
    bottom: 0;
    width: 100%;
    height: 250px;
    min-height: 0px;
  }
`

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

export const MyName = styled(H3)`
  margin-top: ${getSpacing(7)};
`
