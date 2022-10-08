import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/photo1665210969.jpg'


const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={GIF} width="500" height="400" alt="The Weirdos" />
    </VideoContainer>
  )
}

export default CoverVideo