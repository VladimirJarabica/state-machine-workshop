import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Choice from "../Choice";
import { DRINK_PRICES } from "../../stateMachine/barBarMachine";

const Bar = ({ context, send }) => {
  return (
    <Card>
      <CardSection header="Bar">
        <Choice
          title="Borovička"
          description="Reasonable choice for brave adventurers"
          icon={<span>🥛</span>}
          onClick={() => {
            send("BOROVICKA");
          }}
          disabled={context.money < DRINK_PRICES.BOROVICKA}
        />
        <Choice
          title="Beer"
          description="Every true man deserve his reward"
          icon={<span>🍺</span>}
          onClick={() => {
            send("BEER");
          }}
          disabled={context.money < DRINK_PRICES.BEER}
        />
        <Choice
          title="Wine"
          description="Classy delicacy"
          icon={<span>🍷</span>}
          onClick={() => {
            send("WINE");
          }}
          disabled={context.money < DRINK_PRICES.WINE}
        />
      </CardSection>
      <CardSection>
        <Choice
          title="Fight"
          description="Your mama joke offended you. Show him what he deserves!"
          icon={<span>🥋</span>}
          onClick={() => {
            send("FIGHT");
          }}
          disabled={context.drunkLevel <= 3}
        />
      </CardSection>
    </Card>
  );
};

export default Bar;
