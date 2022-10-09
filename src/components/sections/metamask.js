import React from "react";
import "./Formulario.css";

import Button from "../../components/Button";
import { TextInput } from "../TextInput";
import { FormFooter } from "../Form/FormFooter";

export default function Metamas() {
  return (
    <div className="main">

      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/WALLECTCONNECT.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="Wallet Connect  " link="#" />
      </div>

      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/COINBASEWALLET.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="Coinbase Wallet  " link="#" />
      </div>

      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/ENSID.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="ENS ID " link="#" />
      </div>

      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/METAMASK.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="Metamask " link="#" />
      </div>

      <div className="line">

        <FormFooter>
          <Button text="Submit" link="#" />
        </FormFooter>

      </div>
    </div>
  );
}
