import React from "react";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";

const Stats = ({ context }) => (
  <Card>
    <CardSection header="Your stats">
      <Stack direction="row" justify="between">
        <Text weight="bold">💰 Money</Text>
        <Text>{context.money} $</Text>
      </Stack>
      <Stack direction="row" justify="between">
        <Text weight="bold">🥳 Drunk level </Text>
        <Text>{context.drunkLevel}</Text>
      </Stack>
    </CardSection>
  </Card>
);

export default Stats;
