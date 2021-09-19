import { FC } from 'react'
import { Avatar } from '../../../Avatar/Avatar.component'
import React from 'react'
import { DetailColumn, MyName, StyledCard } from './SideBar.style'
import { SidebarItem } from './SidebarItem/SidebarItem.component'

interface Props {}

export const SideBar: FC<Props> = () => {
  return (
    <StyledCard elevation={4}>
      <Avatar />
      <MyName>James Haworth Wheatman</MyName>
      <DetailColumn>
        <br />
        <SidebarItem
          text="Full-Stack Developer at Theodo UK"
          link="https://www.theodo.co.uk/"
          src="https://www.theodo.co.uk/hs-fs/hubfs/theodologo-ConvertImage-15.png?width=287&name=theodologo-ConvertImage-15.png"
        />
        <SidebarItem
          text={
            <>
              MSc Computer Science <br /> from UCL
            </>
          }
          src="https://www.ucl.ac.uk/aihealth-cdt/sites/aihealth_cdt/files/styles/small_image/public/ucl-logo-web.jpg?itok=ZUOfeBl9"
          link="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc"
        />
        <SidebarItem
          text={
            <>
              BSc Physics from <br /> University of Sheffield
            </>
          }
          src="/icons/Sheffield.png"
          link="https://www.sheffield.ac.uk/undergraduate/courses/2022/physics-bsc"
        />
      </DetailColumn>
    </StyledCard>
  )
}
