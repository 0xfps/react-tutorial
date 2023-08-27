import { useState } from "react"

const increment = (num: number) => {
    localStorage.setItem(
        "number", num.toString()
    )
    return ++num
}

const SimpleCounter = () => {
    let [count, setCount] = useState(Number(localStorage.getItem("number")))

    return (
        <div>
            Count :: {Number(localStorage.getItem("number"))}
            <br />
            <button onClick={() => setCount(increment(count))}>Increment</button>
        </div>
    )
}

export default SimpleCounter