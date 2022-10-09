import React from "react";
import "./sections/Formulario.css";

import Button from "./Button";
import { TextInput } from "./TextInput";
import { FormFooter } from "./Form/FormFooter";
function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="main">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <TextInput titulo="Country of residence*" nome="country" />
        <TextInput titulo="First Name* " nome="firstName" />
        <TextInput titulo="Last Name* " nome="lastName" />
        <TextInput titulo="Etnicity" nome="etnicity" />
        <TextInput titulo="Birth date* " nome="birthDate" />
        <Button text="Create ID" link="#Wallet" />
        <FormFooter>
          <Button text="Submit" link="#" />
        </FormFooter>
      </form>
    </div>
  );
}

export default PersonalInfo;
