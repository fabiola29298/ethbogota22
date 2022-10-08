import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SVG from '../assets/LOGO-01.svg'
const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
        <img src={SVG} width="50" height="50" height-max="20" alt="i am logo" />
        </Link>
    </LogoText>
  )
}

export default Logo