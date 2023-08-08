// React.component.
import { Component } from "react"
import sayHello from "./sayHello"

interface Props {
    name: string,
    heroname: string
}

class GreetClass extends Component<Props> {
    minecraft: string

    constructor(props: Props, mine: string) {
        super(props)
        this.minecraft = mine
    }

    call() {
        return (
            <div>
                <h1>{sayHello(this.props.name)} aka {this.props.heroname} 😎!</h1>
                {/* // @ts-ignore
                {this.props.children} */}
            </div>
        )
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>{sayHello(this.props.name)} aka {this.props.heroname} 😎!</h1>
                {/* // @ts-ignore
                {this.props.children} */}
            </div>
        )
    }
}

export default GreetClass