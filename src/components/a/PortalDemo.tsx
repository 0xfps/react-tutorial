import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalDemo extends Component {
    // @ts-ignore
    el: HTMLElement = document.getElementById("portal-root")

    render() {
        return ReactDOM.createPortal(
            <div>PortalDemo</div>,
            this.el
        )
    }
}

export default PortalDemo