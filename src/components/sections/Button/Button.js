import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./Button.styles";

export function Button(props) {
  const { onClick, titulo = "Botão", cor } = props;

  return (
    <StyledButton corBotao={cor} onClick={onClick}>
      {titulo}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
