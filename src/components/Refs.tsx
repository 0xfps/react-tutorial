import React, { Component } from 'react'

class Refs extends Component {
    inputRef: any

    constructor(props: any) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount(): void {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default Refs