import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    inputRef: any

    constructor(props: any) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default FRParentInput