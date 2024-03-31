// change the state and return the new state according to actions
export function CounterReducer(state, action) {
    // {
    //     count: 0
    // }
    switch (action.type) {
        case "INCREMENT":
            // todo
            console.log("im in increment action")
            return {count: state.count + 1}
            break;
        case "DECREMENT":
            // todo
            return {count: state.count - 1}
            break;
        default:
            return state
    }

}