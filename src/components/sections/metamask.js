import React from "react";
import "./Formulario.css";

import Button from "../../components/Button";
import { TextInput } from "../TextInput";
import { FormFooter } from "../Form/FormFooter";

export default function Metamas() {
  return (
    <main className="main">
      <input type="button" value="Connect Wallet" onclick="connect();"></input>
      <h1>0x228...C0B5</h1>
      <Button text="Wallet Connect  " link="#" />
      <br /><br />
      <Button text="Coinbase Wallet " link="#" />
      <br /><br />
      <Button text="ENS ID          " link="#" />
      <br /><br />
      <Button text="Metamask        " link="#" />

      <FormFooter>
        <Button text="Submit" link="#" />
      </FormFooter>
    </main>
  );
}
