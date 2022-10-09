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
      <FormFooter>
        <Button text="Submit" link="#" />
      </FormFooter>
    </main>
  );
}
