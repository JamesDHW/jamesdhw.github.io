import { Navbar, NavbarGroup } from '@blueprintjs/core'
import styled from 'styled-components'
import { getSpacing } from '../../../../stylesheet'

export const StyledNavbar = styled(Navbar)`
  background-color: transparent !important;
  height: 100px;
  /* overflow: visible; */
  box-shadow: none !important;
  max-width: 100vw !important;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    background: url('/images/layout/navbar.svg');
    aspect-ratio: 900/50;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media only screen and (max-width: 1000px) {
      aspect-ratio: 600/50;
    }
    @media only screen and (max-width: 600px) {
      aspect-ratio: 300/50;
    }
  }
`

export const StyledRightNavbarGroup = styled(NavbarGroup)`
  @media only screen and (max-width: 420px) {
    display: none;
  }
`

export const Link = styled.a`
  padding: ${getSpacing(2)};
`

export const BlogTitle = styled.a`
  padding-top: ${getSpacing(2)};
  :hover {
    text-decoration: none;
  }
`
