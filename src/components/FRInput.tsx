import React, { Component } from 'react'

const FRInput = React.forwardRef((props: any, ref: any) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default FRInput