import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    clickHandler = () => {
        alert("I clicked a button!")
    }

    render() {
        return (
            <ChildComponent handler={() => this.clickHandler() } />
        )
    }
}

export default ParentComponent