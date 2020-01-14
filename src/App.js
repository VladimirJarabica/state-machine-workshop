import React, { useEffect } from "react";
import { useMachine } from "@xstate/react";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

import barBarMachine from "./stateMachine/barBarMachine";
import Stats from "./components/Stats";
import Street from "./components/states/Street";
import Bar from "./components/states/Bar";
import Drinking from "./components/states/Drinking";
import Police from "./components/states/Police";

function App() {
  const [current, send] = useMachine(barBarMachine);

  useEffect(() => {
    console.log("current state", current);
  }, [current.value]);
  return (
    <Layout type="Booking">
      <LayoutColumn>
        {current.matches("street") && (
          <Street context={current.context} send={send} />
        )}
        {current.matches("bar") && (
          <Bar context={current.context} send={send} />
        )}
        {current.matches("drinking") && (
          <Drinking context={current.context} send={send} />
        )}
        {current.matches("police") && (
          <Police context={current.context} send={send} />
        )}
      </LayoutColumn>
      <LayoutColumn>
        <Stats context={current.context} />
      </LayoutColumn>
    </Layout>
  );
}

export default App;
