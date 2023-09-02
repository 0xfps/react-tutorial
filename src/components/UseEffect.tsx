import { useEffect, useState } from "react"

interface Coordinates {
    x: number,
    y: number
}

const UseEffect = () => {
    let [counter, setCounter] = useState(0)
    let [name, setName] = useState("")

    let [mousePosition, setMousePostion] = useState<Coordinates>({
        x: 0,
        y: 0
    })

    // Gets executed after every render of the component.
    useEffect(() => {
        document.title = `You clicked ${counter} times.`
    })

    useEffect(() => {
        document.title = `You clicked ${counter} times.`
    }, [counter])

    const setCoordinates = (e: any) => {
        console.log("Event Called")
        setMousePostion({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        console.log("Use Effect Called")
        console.log(mousePosition)
        window.addEventListener("mousemove", setCoordinates)
        console.log(mousePosition)

        return () => {
            window.removeEventListener("mousemove", setCoordinates)
        }
    }, [])

    return (
        <div>
            <h4>Use Effect Hook</h4>
            <button onClick={() => setCounter(counter + 1)}>Cick To Increment {counter} 👋🏾</button>

            <br /><br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCounter(counter + 1)}>Set New Name 👋🏾</button>

            <br /><br />
            Co-ordinates X: {mousePosition.x}; Y: {mousePosition.y}
        </div>
    )
}

export default UseEffect