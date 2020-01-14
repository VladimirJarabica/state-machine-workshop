import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Choice from "../Choice";

const Street = ({ context, send }) => (
  <Card>
    <CardSection header="Street">
      <Choice
        title="Bar"
        description="Open the door of mystery"
        icon={<span>🍻</span>}
        onClick={() => send("GO_TO_BAR")}
      />
      <Choice
        title="Home"
        description="Enough for today"
        icon={<span>🛏</span>}
        onClick={() => send("GO_HOME")}
      />
    </CardSection>
  </Card>
);

export default Street;
