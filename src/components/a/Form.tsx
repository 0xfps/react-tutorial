import { Component } from "react";

class Form extends Component {
    state: any
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            bio: "",
            topic: ""
        }
    }

    handleUsernameChange = (event: any) => {
        console.log(event)
        this.setState({
            username: event.target.value
        })
    }

    handleBioChange = (event: any) => {
        this.setState({
            bio: event.target.value
        })
    }

    handleTopicChange = (event: any) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        alert(`${this.state.username} == ${this.state.bio} == ${this.state.topic}`)
    }

    render() {
        return (
            <div>
                <h3>Form Component</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" value={this.state.username} onChange={this.handleUsernameChange} />

                    <br />
                    <br />
                    <br />

                    <label htmlFor="">Bio</label>
                    <textarea name="" id="" value={this.state.bio} onChange={this.handleBioChange}>
                    </textarea>

                    <br />
                    <br />
                    <br />

                    <label htmlFor="">Select your Topic</label>
                    <select name="" id="" value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="">Select Your Topic</option>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>

                    <br />
                    <br />
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form