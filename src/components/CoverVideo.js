import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/photo1665210969.jpg'


const VideoContainer = styled.div`
width: 100%;
height: 40%;
video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 30vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={GIF} width="500" height="300" alt="Imagen de portada " />
    </VideoContainer>
  )
}

export default CoverVideo