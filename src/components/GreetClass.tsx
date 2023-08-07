// React.component.
import { Component } from "react"
import sayHello from "./sayHello"

class GreetClass extends Component {
    minecraft: string

    constructor(props: Object, mine: string) {
        super(props)
        this.minecraft = mine
    }

    call() {
        return <h1>{sayHello("Mike")} 😎!</h1>
    }
    
    render(): React.ReactNode {
        return <h1>{sayHello("Nnaemeka")} 😎!</h1>
    }
}

export default GreetClass