import React, { Component, ReactNode, useRef } from "react";

class FragmentsDemo extends Component {
    
    render(): ReactNode {
        return (
            <React.Fragment>
                <h2>Fragments Demo!</h2>
                <p>This is how you use a Fragment.</p>
            </React.Fragment>
        )
    }
}

export default FragmentsDemo