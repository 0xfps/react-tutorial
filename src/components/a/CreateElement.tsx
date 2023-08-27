import React from "react"

const CreateElement = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            {
                id: "h4"
            },
            "Welcome!"
        )
    )
}

export default CreateElement