import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import Loading from "../Loading";

const CoverVideo = lazy(() => import("../CoverVideo"));
const TypeWriterText = lazy(() => import("../TypeWriterText"));
const imagen = "../../assets/back.png";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;

  position: relative;
  color: ${(props) => props.theme.text};

  display: inline-flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Inicio = () => {
  return (
    <Section id="Inicio">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>{/* <TypeWriterText /> */}</Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>{/* <CoverVideo /> */}</Suspense>
        </Box>
      </Container>
    </Section>
  );
};

export default Inicio;
