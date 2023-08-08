import { Component } from "react"

class Message extends Component {
    state: any

    constructor(props: any) {
        super(props)

        this.state = {
            message: "Welcome Visitor, this is Yard.",
            count: 0
        }
    }

    changeMessage = () => {
        if (this.state.count < 30) {
            this.setState({
                message: "Thank you for subscribing!",
                count: this.state.count + 1
            })
        } else {
            this.setState({
                message: "Thank you for subscribing! We've reached max."
            })
        }
    }

    render(): React.ReactNode {
        let str: string
        if (this.state.count == 1) str = "subscriber"
        else str = "subscribers"
        return (
            <div>
                {this.state.message}
                <br />
                We have {this.state.count} {str} now!
                <button onClick={() => this.changeMessage()}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default Message