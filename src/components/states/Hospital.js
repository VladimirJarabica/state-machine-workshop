import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Choice from "../Choice";
import { HEALING_PRICE } from "../../stateMachine/barBarMachine";

const Hospital = ({ context, send }) => (
  <Card>
    <CardSection header="You got in hospital">
      <img
        src={`https://media1.giphy.com/media/LLhEaNmf4hwM8/giphy.gif?fresh=${Date.now()}`}
      />
      <Choice
        title="Pay for healthcare"
        description={`Pay the ${HEALING_PRICE} for healthcare or you'll be sent to the street`}
        icon={<span>🍺</span>}
        onClick={() => {
          send("PAY_TO_HEAL");
        }}
        disabled={context.money < HEALING_PRICE}
      />
    </CardSection>
  </Card>
);

export default Hospital;
