import { Component } from "react";

class UserGreeting extends Component {
    state: any

    constructor(props: any) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <p>Welcome Anthony!</p>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <p>Welcome Guest!</p>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <p>Welcome Anthony!</p>
        //         <p>Welcome Guest!</p>
        //     </div>
        // )
        // let message
        // if (this.state.isLoggedIn) message = <div><p>Welcome Anthony!</p></div>
        // else message = <div><p>Welcome Guest!</p></div>
        // return (
        //     message
        // )
        return this.state.isLoggedIn ?
            (<div><p>Welcome Anthony!</p></div>) : (<div><p>Welcome Guest!</p></div>)
    }
}

export default UserGreeting