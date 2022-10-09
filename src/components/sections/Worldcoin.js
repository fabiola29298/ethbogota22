import React from "react";
import "./Formulario.css";

import Button from "../../components/Button";
import { TextInput } from "../TextInput";
import { FormFooter } from "../Form/FormFooter";

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
  onInitError: (error) =>
    console.log("Error while initialization World ID", error),
};

export default function Worldcoin() {
  return (
    <main className="main">
      <WorldIDWidget {...widgetProps} />
      <FormFooter>
        <Button text="Submit" link="#" />
      </FormFooter> </main>
  );
}
