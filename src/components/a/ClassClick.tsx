import { Component } from "react";

class ClassClick extends Component {
    state: any

    constructor(props: any) {
        super(props)
        this.state = {
            welcomeMessage: "Hello"
        }
    }

    clickHandler = () => {
        const {welcomeMessage} = this.state
        if (welcomeMessage.toLowerCase() == "hello") {
            this.setState({
                welcomeMessage: "Goodbye"
            })
        } else {
            this.setState({
                welcomeMessage: "Hello"
            })
        }
    }

    render() {
        return (
            
            <button
                className="button"
                onClick={() => this.clickHandler()}
            >
                {this.state.welcomeMessage}
            </button>
        )
    }
}

export default ClassClick