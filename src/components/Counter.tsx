import { Component } from "react";

class Counter extends Component {
    state: any

    constructor(props: any) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                The current count is {this.state.count}
                <br />
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter