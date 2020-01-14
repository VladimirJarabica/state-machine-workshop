import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Choice from "../Choice";
import { BAIL } from "../../stateMachine/barBarMachine";

const Police = ({ context, send }) => (
  <Card>
    <CardSection header="You got caught by police">
      <img
        src={`https://media1.giphy.com/media/bmASYw5bwmTsI/giphy.gif?fresh=${Date.now()}`}
      />
      <Choice
        title="Bail"
        description={`Pay the ${BAIL} bail or go home in 10 seconds`}
        icon={<span>🍺</span>}
        onClick={() => {
          send("BAIL");
        }}
        disabled={context.money < BAIL}
      />
    </CardSection>
  </Card>
);

export default Police;
