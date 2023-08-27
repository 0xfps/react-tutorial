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
        this.setState((prevState) => ({
            // @ts-ignore
            count: prevState.count + 1
        }))
    }

    increment5 = () => {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                The current count is {this.state.count}
                <br />
                <button onClick={() => this.increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter