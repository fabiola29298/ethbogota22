import React from "react";
import "./Formulario.css";

import Button from "../../components/Button";
import { TextInput } from "../TextInput";
import { FormFooter } from "../Form/FormFooter";


export default function Minamask() {
  return (
    <div className="main">
      <h1>0x228...C0B5</h1>

      <br /><br />
      <div className="lineVertical" >
       <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/MINA.png"
       width="40px" height="100%"  alt="Imagen de portada " />
       <Button text="Mina " link="#"  />
      </div>

      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/AZTEC.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="Aztec " link="#" />
      </div>
      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/SCROLL.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="Scroll " link="#" />
      </div>
      <br /><br />
      <div className="lineVertical" >
        <img src="https://raw.githubusercontent.com/fabiola29298/ethbogota22/main/src/assets/STREAMRNETWORK.png"
          width="40px" height="100%" alt="Imagen de portada " />
        <Button text="Sctreamr Network " link="#" />
      </div>
      <br /><br />
      <br></br>
      <Button text="Submit" link="#" />
      <br></br>

    </div>
  );
}
