import React from "react";
import PropType from "prop-types";
import { StyledFormGroup, StyledInput, StyledLabel } from "./TextInput.styles";

export function TextInput(props) {
  const { id, nome, titulo = "Título do campo", placeholder = null } = props;

  //
  return (
    <StyledFormGroup>
      <StyledLabel htmlFor={id}>{titulo}</StyledLabel>
      <StyledInput id={id ?? nome} name={nome} type="text" placeholder={placeholder} />
    </StyledFormGroup>
  );
}

TextInput.propTypes = {
  id: PropType.string,
  nome: PropType.string,
  titulo: PropType.string,
  placeholder: PropType.string,
};
