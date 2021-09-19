import { Button, Callout, H3 } from '@blueprintjs/core'
import styled from 'styled-components'
import { getSpacing } from '../../../../../stylesheet'

export const StyledCallout = styled(Callout)`
  margin: ${getSpacing(5)};
  margin-top: ${getSpacing(25)};

  @media only screen and (max-width: 420px) {
    margin-top: ${getSpacing(15)};
  }
`

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: ${getSpacing(5)} 0px;
  box-shadow: #007fff 0px 40px 20px -40px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
    animation: none ease-in-out;
  }

  @media only screen and (max-width: 500px) {
    width: 150px;
  }
`

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 420px) {
    justify-content: start;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`

export const ImageContainer = styled.div<{ offset: number }>`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  content: '';
  height: 90px;
  width: 90px;
  margin-bottom: ${getSpacing(2)};
  animation: float ${({ offset }) => `7.${2 * offset}`}s infinite ease-in-out;
  transition: all 0.2s ease-in-out;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${getSpacing(3)};
  width: 100%;
  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    margin-top: ${getSpacing(3)};
  }
`

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TechName = styled(H3)`
  text-align: center;
`

export const ShuffleButton = styled(Button)`
  margin-left: ${getSpacing(2)};
`
