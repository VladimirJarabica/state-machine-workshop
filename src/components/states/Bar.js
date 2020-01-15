import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Choice from "../Choice";

const Data = {
  BOROVICKA: {
    icon: "🥛",
    title: "Borovička",
    description: "Reasonable choice for brave adventurers"
  },
  BEER: {
    title: "Beer",
    description: "Every true man deserve his reward",
    icon: "🍺"
  },
  WINE: {
    title: "Wine",
    description: "Classy delicacy",
    icon: "🍷"
  },
  GO_TO_STREET: {
    title: "Street",
    description: "Go back to the street",
    icon: "🚪"
  }
};

const Bar = ({ context, send, allowed = [] }) => (
  <Card>
    <CardSection header="Bar">
      {Object.entries(Data).map(([key, value]) => (
        <Choice
          {...value}
          key={key}
          icon={<span>{value.icon}</span>}
          onClick={() => {
            send(key);
          }}
          disabled={!allowed.includes(key)}
        />
      ))}
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

export default Bar;
