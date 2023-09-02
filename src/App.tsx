import { createContext } from "react"
import "./App.css"
import UseEffect from "./components/UseEffect"
import UseState from "./components/UseState"
import UseContext from "./components/UseContext"
import UseReducer from "./components/UseReducer"
import CustomHook from "./components/CustomHook"

export const MyContext = createContext("")

const App = () => {
    return (
        <MyContext.Provider value="This is great!">
            {/* <div className="App">
                <h2>Hooks</h2>
                <UseState />
                <UseEffect />
            </div>
            <UseContext />
            <UseReducer /> */}
            <CustomHook />
        </MyContext.Provider>
    )
}

export default App