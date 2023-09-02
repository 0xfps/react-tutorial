import { useReducer } from "react"

// This piece of code can be anywhere, outside, or inside.
const initialState = 0

const reducer = (currentState: any, action: any) => {
    switch (action) {
        case "increment":
            return currentState + 1
        case "decrement":
            return currentState - 1
        case "reset":
            return 0
        default:
            return currentState
    }
}

const UseReducer = () => {
    // initialState :: Original base value, e.g useState(0), in this context.
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count is {count}
            {/* dispatch(action(only)) */}
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </>
    )
}

export default UseReducer