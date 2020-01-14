import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

const Drinking = () => (
  <Card>
    <CardSection>
      <img
        src={`https://media.giphy.com/media/Zw3oBUuOlDJ3W/giphy.gif?fresh=${Date.now()}`}
      />
    </CardSection>
  </Card>
);

export default Drinking;
