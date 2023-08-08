import { Component } from "react";

class NameList extends Component {
    list: Array<string> = ["Bruce", "Clark", "Diana", "Barry"]

    render() {
        let nameList = this.list.map(x => x)
        return (
            <div>{nameList}</div>
        )
    }
}

export default NameList