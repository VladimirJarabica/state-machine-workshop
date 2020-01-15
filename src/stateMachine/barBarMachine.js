import { Machine, assign } from "xstate";

export const DRUNK_LEVELS = {
  BOROVICKA: _,
  BEER: _,
  WINE: _
};

export const DRINK_PRICES = {
  BOROVICKA: _,
  BEER: _,
  WINE: _
};

export const BAIL = _;
export const HEALING_PRICE = _;

const DRUNK_LEVEL_CAN_FIGHT = _;
const DRUNK_LEVEL_CAN_WIN = _;
const DRUNK_LEVEL_CAN_NOT_WIN = _;

const barBarTour = Machine(
  {
    id: "barbar",
    initial: "street",
    context: {
      drunkLevel: 0,
      money: _
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
      hospital: {}
    }
  },
  {
    actions: {},
    guards: {}
  }
);

export default barBarTour;
