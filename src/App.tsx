import { Component, ReactNode } from "react"
import "./App.css"
import FragmentsDemo from "./components/FragmentsDemo"
import Refs from "./components/Refs"
import FRParentInput from "./components/FRParentInput"
import PortalDemo from "./components/PortalDemo"

class App extends Component {
    render(): ReactNode {
        return (
            <div className="App">
                <FragmentsDemo />
                <Refs />
                <FRParentInput />
                <PortalDemo />
            </div>
        )
    }
}

export default App