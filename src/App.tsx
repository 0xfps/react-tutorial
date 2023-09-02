import { createContext } from "react"
import "./App.css"
import UseEffect from "./components/UseEffect"
import UseState from "./components/UseState"
import UseContext from "./components/UseContext"
import UseReducer from "./components/UseReducer"

export const MyContext = createContext("")

const App = () => {
    return (
        <MyContext.Provider value="This is great!">
            <div className="App">
                <h2>Hooks</h2>
                <UseState />
                <UseEffect />
            </div>
            <UseContext />
            <UseReducer/>
        </MyContext.Provider>
    )
}

export default App