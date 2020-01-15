import { Machine, assign } from "xstate";

const DRUNK_LEVELS = {
  BOROVICKA: 3,
  BEER: 2,
  WINE: 2
};

const DRINK_PRICES = {
  BOROVICKA: 30,
  BEER: 40,
  WINE: 55
};

const BAIL = 500;
const HEALING_PRICE = 100;

const barBarTour = Machine(
  {
    id: "barbar",
    initial: "street",
    context: {
      drunkLevel: 0,
      money: 100
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
          BOROVICKA: {
            target: "drinking",
            actions: ["drink", "pay"],
            cond: "canAffordDrink"
          },
          BEER: {
            target: "drinking",
            actions: ["drink", "pay"],
            cond: "canAffordDrink"
          },
          WINE: {
            target: "drinking",
            actions: ["drink", "pay"],
            cond: "canAffordDrink"
          },
          FIGHT: [
            {
              target: "police",
              cond: "canFightAndWin"
            },
            {
              target: "hospital",
              cond: "canFightButLoose"
            }
          ],
          GO_TO_STREET: "street"
        }
      },
      drinking: {
        after: {
          2000: [
            {
              target: "bar",
              cond: "canStand"
            },
            { target: "hospital" }
          ]
        }
      },
      police: {
        on: {
          BAIL: {
            target: "street",
            actions: "payBail",
            cond: "canPayBail"
          }
        },
        after: {
          10000: {
            target: "home"
          }
        }
      },
      hospital: {
        on: {
          PAY_TO_HEAL: {
            target: "bar",
            actions: "payForHealing",
            cond: "canAffordHealtCare"
          }
        },
        after: {
          10000: {
            target: "street"
          }
        }
      },
      home: {
        type: "final"
      }
    }
  },
  {
    actions: {
      drink: assign({
        drunkLevel: (context, event) =>
          context.drunkLevel + DRUNK_LEVELS[event.type]
      }),
      pay: assign({
        money: (context, event) => context.money - DRINK_PRICES[event.type]
      }),
      payForHealing: assign({
        drunkLevel: context => Math.floor(context.drunkLevel / 2),
        money: context => context.money - HEALING_PRICE
      }),
      payBail: assign({
        money: context => context.money - BAIL
      })
    },
    guards: {
      canStand: context => context.drunkLevel < 10,
      canAffordDrink: (context, event) => {
        return context.money >= DRINK_PRICES[event.type];
      },
      canFightAndWin: context =>
        context.drunkLevel > 3 && context.drunkLevel < 7,
      canFightButLoose: context => context.drunkLevel >= 7,
      canPayBail: context => context.money >= BAIL,
      canAffordHealtCare: context => context.money >= HEALING_PRICE
    }
  }
);

export {
  barBarTour as default,
  BAIL,
  HEALING_PRICE
};
