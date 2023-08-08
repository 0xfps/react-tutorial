import { useState } from "react"

const increment = (num: number) => {
    return ++num
}

const SimpleCounter = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            Count :: {count}
            <br />
            <button onClick={() => setCount(increment(count))}>Increment</button>
        </div>
    )
}

export default SimpleCounter