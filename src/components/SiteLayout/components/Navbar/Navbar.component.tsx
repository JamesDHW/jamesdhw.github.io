import React, { FC } from 'react'
import {
  BlogTitle,
  Link,
  StyledNavbar,
  StyledRightNavbarGroup
} from './Navbar.style'
import {
  NavbarGroup,
  Alignment,
  Icon,
  NavbarDivider,
  H3
} from '@blueprintjs/core'

const ICON_HEIGHT = 24
export const Navbar: FC = () => {
  return (
    <StyledNavbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <Link href="https://jamesdhw.github.io">
          <Icon size={ICON_HEIGHT} color="white" icon="home" />
        </Link>
        <NavbarDivider />
        <BlogTitle href="/blog">
          <H3>Blog ✍️</H3>
        </BlogTitle>
      </NavbarGroup>

      <StyledRightNavbarGroup align={Alignment.RIGHT}>
        <NavbarDivider />
        <Link
          target="_blank"
          href="mailto:JamesHaworthWheatman@gmail.com?subject=[GitHub Pages]: ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Icon size={ICON_HEIGHT} color="white" icon="envelope" />
        </Link>
        <Link target="_blank" href="https://github.com/JamesDHW">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={ICON_HEIGHT}
            width={ICON_HEIGHT}
            src="/icons/GitHub.png"
            alt=""
          />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/jamesdhw/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={ICON_HEIGHT}
            width={ICON_HEIGHT}
            src="/icons/LinkedIn.png"
            alt=""
          />
        </Link>
      </StyledRightNavbarGroup>
    </StyledNavbar>
  )
}
