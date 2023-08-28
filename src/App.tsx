import { Component, ReactNode } from "react"
import "./App.css"
import FragmentsDemo from "./components/FragmentsDemo"
import Refs from "./components/Refs"
import FRParentInput from "./components/FRParentInput"
import PortalDemo from "./components/PortalDemo"
import Hero from "./components/Hero"
import ErrorBoundary from "./components/ErrorBoundary"
import UseEffect from "./components/UseEffect"
import AutoCounter from "./components/AutoCounter"
import AutoCounterF from "./components/AutoCounterF"
import { VariableIncrementer } from "./components/VariableIncrementer"

class App extends Component {
    render(): ReactNode {
        return (
            <div className="App">
                <FragmentsDemo />
                <Refs />
                <FRParentInput />
                <PortalDemo />
                <UseEffect />
                <AutoCounterF />
                <VariableIncrementer increment={5} />
            </div>
        )
    }
}

export default App