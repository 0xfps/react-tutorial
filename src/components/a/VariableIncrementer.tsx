import { useState } from "react"

interface Props {
    increment: number
}

export const VariableIncrementer = ({ increment }: Props) => {
    let [numIncremented, setNumIncremented] = useState(0)
    let [counter, setCounter] = useState(0)

    const inc = () => {
        setNumIncremented(numIncremented + 1)
        setCounter(counter + increment)
    }

    return (
        <div>
            Incremented {numIncremented} times, new number is {counter}

            <button onClick={inc}>Increment Me</button>
        </div>
    )
}