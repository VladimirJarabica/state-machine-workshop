import { Machine, assign } from "xstate";

export const DRUNK_LEVELS = {
  BOROVICKA: 3,
  BEER: 2,
  WINE: 2
};

export const DRINK_PRICES = {
  BOROVICKA: 30,
  BEER: 40,
  WINE: 55
};

export const BAIL = 500;
export const HEALING_PRICE = 100;

const barBarTour = Machine(
  {
    id: "barbar",
    initial: "street",
    context: {
      drunkLevel: 0,
      money: 1000
    },
    states: {
      street: {
        on: {
          GO_TO_BAR: "bar",
          GO_HOME: "home"
        }
      },
      bar: {
        on: {
          GO_TO_STREET: "street"
        }
      },
      police: {
        after: {
          10000: {
            target: "home"
          }
        }
      },
      hospital: {},
      home: {
        type: "final"
      }
    }
  },
  {
    actions: {},
    guards: {}
  }
);

export default barBarTour;
