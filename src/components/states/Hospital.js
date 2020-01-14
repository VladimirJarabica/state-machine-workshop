import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Choice from "../Choice";
import { HEALING_PRICE } from "../../stateMachine/barBarMachine";

const Hospital = ({ context, send }) => (
  <Card>
    <CardSection header="You get in hospital">
      <img src="https://media1.giphy.com/media/bmASYw5bwmTsI/giphy.gif?cid=790b7611e0dc499b5066a7fb1a3f0bf450c43ad449ca801d" />
      <Choice
        title="Bail"
        description={`Pay the ${HEALING_PRICE} for healthcare or go to street`}
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
