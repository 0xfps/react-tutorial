import React, { createContext, useContext, useState } from 'react'
const MyContext = createContext("")

function Context() {
    let [user, setUser] = useState("Anthony")

    return (
        <MyContext.Provider value={user}>
            <div>Context</div>
        </MyContext.Provider>
    )
}

export default Context