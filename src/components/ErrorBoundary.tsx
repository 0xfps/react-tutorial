import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state: any

    constructor(props: any) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // Via ChatGPT:
    // This method allows you to update the component's state to reflect the error condition.
    static getDerivedStateFromError = (error: Error) => {
        return {
            hasError: true
        }
    }

    componentDidCatch = (error: Error, errorInfo: React.ErrorInfo): void => {
        console.log(error)
        console.log(errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>Something went wrong!</div>
            )
        }
        // @ts-ignore
        return this.props.children
    }
}

export default ErrorBoundary