import React from "react";
import styled from "styled-components";
import Button from './Button';
import ButtonWhite from './ButtonWhite';
import { WorldIDWidget, WidgetProps } from "@worldcoin/id";

const widgetProps = {
  actionId: "wid_staging_1d06a5e9e420ca26e7cb10d444e8298b",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "candyApp",
  signalDescription: "Receive initial airdrop April 2022",
  theme: "light",
  debug: true, // DO NOT SET TO `true` IN PRODUCTION
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
};


const Title = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;



  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) {
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }


`;
const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`;
const ButtonContainer2 = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`;

const TypeWriterText = () => {
  return (
    <>
        <Title>
        <span class="text-1">NFTs.</span>
        <b>Take</b> <br></br>
        <b>control</b> <br></br>
        <b>of </b> your <br></br>
        Identity <br></br>
        and future
        </Title>

      <WorldIDWidget {...widgetProps} />
      <br></br>
    <ButtonContainer>
        <Button text="Connect Wallet to login" link="https://google.com" />
    </ButtonContainer>
    <br></br>
      <ButtonContainer2>
        <Button text="Create ID" link="https://google.com" />
      </ButtonContainer2>
    <br></br>

    </>

  );
};

export default TypeWriterText;
