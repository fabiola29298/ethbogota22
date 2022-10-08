import React from 'react'
import styled from 'styled-components'




const JoiNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

@media (max-width: 48em){
    padding: 1rem 2rem;
}
@media (max-width: 30em){
    padding: 0.5rem 2rem;
font-size: ${props => props.theme.fontsm};

}
&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const ButtonWhite = ({ text, link }) => {
  return (
    <a href={link} aria-label={text} target="_blank" rel="noreferrer" >
      <JoiNow    >{text}</JoiNow>
    </a>

  )
}

export default ButtonWhite