import { Icon, IconName, Intent } from '@blueprintjs/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import { getSpacing } from '../../../../../../../stylesheet'

interface Props {
  rating: number
  icon: IconName
  iconEmpty?: IconName
  intent: Intent
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 200px;
  justify-content: space-evenly;
  margin-top: ${getSpacing(1)} 0;
`

const StyledIcon = styled(Icon)`
  margin: ${getSpacing(1)};
`

export const RatingBar: FC<Props> = ({ rating, icon, iconEmpty, intent }) => {
  return (
    <Container>
      {Array.from({ length: rating }).map((_, key) => (
        <StyledIcon key={key} icon={icon} intent={intent} />
      ))}

      {Array.from({ length: 5 - rating }).map((_, key) => (
        <StyledIcon key={key} icon={icon} intent={undefined} />
      ))}
    </Container>
  )
}
