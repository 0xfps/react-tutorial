import { useState } from "react"

const AutoCounterF = () => {
    let [count, setCount] = useState({
        number: 0,
        xVal: 0
    })
    
    // setInterval(() => {
    //     setCount({
    //         ...count,
    //         number: count.number + 1
    //     })
    // }, 1000)

    const hover = () => {
        setCount({
            ...count,
            xVal: count.xVal + 1
        })
    }

    let times

    if (count.xVal == 1) times = "time"
    else times = "times"

    return (
        <div onMouseOver={hover}>
            AutoIncrement: {count.number} times!
            Hovered {count.xVal} {(count.number == 1) ? `time` : `times`}!
        </div>
    )
}

export default AutoCounterF