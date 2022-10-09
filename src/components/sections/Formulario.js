import React from "react";
import "./Formulario.css";

import { Button } from "./Button";
import { TextInput } from "../TextInput";
import { FormFooter } from "../Form/FormFooter";

export default function Formulario() {
  return (
    <main className="main">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <TextInput titulo="Country of residence*" nome="country" />
        <TextInput titulo="First Name* " nome="firstName" />
        <TextInput titulo="Last Name* " nome="lastName" />
        <TextInput titulo="Etnicity" nome="etnicity" />
        <TextInput titulo="Birth date* " nome="birthDate" />
        <TextInput titulo="Upload ID photo " nome="photo" />
        <FormFooter>
          <Button cor="#7209b7" titulo="Submit" onClick={() => { }} />
          <Button cor="#fca311" titulo="Clear" onClick={() => { }} />
        </FormFooter>
      </form>
    </main>
  );
}
