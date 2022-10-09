import React, { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { WorldIDWidget, WidgetProps } from "@worldcoin/id";

import Button from '../Button'
import { dark } from '../../styles/Theme';
import Loading from '../Loading';
import Formulario from './Formulario';
import MultiplePage from "../MultiplePage";

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};

@media (max-width: 48em) {
width: 90%;

h1{
font-size: ${props => props.theme.fontxxxl};

}
}
`
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};

}
`
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontxs};

}

`
const HumanityProof = () => {
  return (
    <Section id="HumanityProof">
    <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Title>
              Humanity Proof
            </Title>
            <SubTextLight>
              This is the beginning of your ID process,
              help us know you’re human..
            </SubTextLight>
            </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>

            <MultiplePage /></Suspense>

        </Box>
      </Container >
    </Section>
  );
};

export default HumanityProof;
