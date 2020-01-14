This application represents standard night in Brno citizen.  
He wants to go a bar, have some fun and end up in bed.

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
    resolved: {}
}
```