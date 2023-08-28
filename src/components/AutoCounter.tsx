import React, { Component } from 'react'

class AutoCounter extends Component {
    state: any
    constructor(props: any) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount(): void {
        setInterval(() => {
            this.setState((prevState) => ({
                // @ts-ignore
                count: this.state.count + 1
            }))
        }, 1000)
    }

    render() {
        return (
            <div>
                <div>AutoCounter Class: Count ({this.state.count}) </div>
                <div>AutoCounter Functional: Count ({this.state.count}) </div>
            </div>
        )
    }
}

export default AutoCounter