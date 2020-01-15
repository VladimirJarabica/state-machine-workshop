# About
This application represents standard night in Brno citizen.  
Our hero wants to go a bar, have some fun and end up in bed.

We are going to use Xstate library to write state machine controlling the application state.

# Basic knowledge
## State
refers to some finite "mode" or "status" of a system being modeled by a state machine. It does not describe all the (possibly infinite) data related to that system.

## Transitions
state transition defined what the **next state** is. It is givven current state and event.  
In xstate it is defined on state nodes, in `on` property.
```javascript
states: {
    pending: {
        on: { RESOLVE, 'resolved' }
    },
    resolved: { type: 'final' }
}
```

## Actions
Used for side effects  
Type of actions:
- entry (entering a state)
- exit (exiting a state) action
- transition actions

functions with sematics:  
```javascript
(context, event) => any
```
Can be defined in place or under `actions` key.
```javascript
Machine({
    states: {
        inactive: {
            on: {
                TRIGGER: {
                    target: 'active',
                    // transition actions
                    actions: ['activate', 'sendTelemetry']
                }
            }
        },
        active: {
            // entry actions
            entry: ['notifyActive', 'sendTelemetry'],
            // exit actions
            exit: ['notifyInactive', 'sendTelemetry'],
            on: {
                STOP: 'inactive'
            }
        }
    }
}, {
    actions: {
        activate: (context, event) => {...},
        sendTelemetry: (context, event) => {...},
        notifyActive: (context, event) => {...},
        notifyInactive: (context, event) => {...},
    }
})
```

## Guards
Conditions under which certain transition may happen.  
Can be defined in place or under `guards` key.
```javascript
const searchMachine = Machine(
  {
    // ...
    states: {
      idle: {
        on: {
          SEARCH: {
            target: 'searching',
            // The 'searchValid' guard implementation details are
            // specified in the machine config
            cond: 'searchValid' // or { type: 'searchValid' }
          }
        }
      }
      // ...
    }
  },
  {
    guards: {
      searchValid: (context, event) =>
        context.canSearch && event.query && 
        event.query.length > 0
    }
  }
);
```

## Delayed events and transitions
Transitions which happens after a specified delay
```javascript
const lightDelayMachine = Machine({
  id: 'lightDelay',
  initial: 'green',
  states: {
    green: {
      after: {
        // after 1 second, transition to yellow
        1000: 'yellow'
      }
    },
    yellow: {
      after: {
        // after 0.5 seconds, transition to red
        500: 'red'
      }
    },
    red: {
      after: {
        // after 2 seconds, transition to green
        2000: 'green'
      }
    }
  }
});
```

# Assignment
Create state machine representing ability to go to bar, drink specified drinks, fight and end up in police or hospital. Eventualy ending at home, which is a final state.

From street you can go to bar and back. You can go home also, but not back.

Drinking is paid - you must have enough money for it. Drinking takes some time (2 seconds). Each drink costs different amount of money and increase your drunk level differently.

You can fight from drunk level 3. Till drunk level 6, you can win, but end up in police. Above (and equal) drunk level 6 you loose and end up in hospital.

In police, you can pay the BAIL and be returned to street (if you have money). Without payment after 10 seconds police will take you home directly.

In hospital, you can pay for the healthcare and with half of the drunk level return to street. After 10 seconds you'll be returned to street anyway with same drunk level.

Go to `src/stateMachine/barBarMachine.js` and start coding!

### Steps:

#### 0. Fill constants
Let's add values we will be working with.

#### 1. Add missing states
There are some  missing states - like Home (and more?)

#### 2. Add transitions
Transitions between states.

#### 3. Guards
Add guards for allowing entering transitions.

#### 4. Actions
Add actions for adjusting context data by requirements.