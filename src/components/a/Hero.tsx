import React, { Component } from 'react'

interface Heroes {
    heroname: string
}

class Hero extends Component<Heroes> {
    constructor(props: Heroes) {
        super(props)

        if (this.props.heroname.toLowerCase() == "joker") {
            throw new Error("Not a Hero!")
        }
    }

    render() {
        return (
            <div>Hero</div>
        )
    }
}

export default Hero