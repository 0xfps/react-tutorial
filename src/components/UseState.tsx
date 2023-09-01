import { useState } from "react"

type Items = {
    id: number,
    data: number
}

const UseState = () => {
    let [count, setCount] = useState(0)
    let [counter, setCounter] = useState(0)
    let [button, setButton] = useState("")
    let [size, setSize] = useState(0)
    let [items, setItems] = useState(Array<Items>)

    const increment = () => {
        setCount(count + 1)
    }

    const incrementCount = () => {
        setButton("increment")
        setCounter(prevState => prevState + 1)
    }

    const decrementCount = () => {
        setButton("decrement")
        if (counter > 0) setCounter(prevState => prevState - 1)
    }

    const resetCount = () => {
        setButton("reset")
        setCounter(0)
    }

    const incrementBy = (s: number) => {
        setCounter(prevState => prevState + s)
    }

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            data: Math.floor(Math.random() * 10)
        }])
    }

    return (
        <div>
            <h4>Use State Hook</h4>
            You clicked the button below {count} times! <br />
            <button onClick={increment}>Click Me To Increment 👆🏾</button>

            <br /><br />

            You clicked the {button} button. Value is now {counter}!
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>

            <br /><br />
            You incremented {size} times.
            <input type="text" value={size} onChange={(e) => setSize(Number(e.target.value))} />
            <button onClick={() => incrementBy(size)}>Increment</button>

            <br /><br />
            {
                items.map((item: Items) => <li key={item.id}>{item.data}</li>)
            }
            <button onClick={addItem}>Add Item To List</button>
        </div>
    )
}

export default UseState