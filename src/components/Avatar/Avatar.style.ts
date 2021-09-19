import styled from 'styled-components'

export const AvatarBlob = styled.img`
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-10px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
  width: 175px;
  border-radius: 50%;
  background-image: radial-gradient(circle at center, #007fff 0, #4facf7 100%);
  animation: float 10s infinite;
`
