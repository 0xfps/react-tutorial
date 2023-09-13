// @ts-nocheck
import { createContext, useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/routes/Home"
import { About } from "./components/routes/About"
import Navbar from "./components/Navbar"
import Contact from "./components/routes/Contact"
import NoMatch from "./components/routes/NoMatch"
import Products from "./components/routes/Products"
import New from "./components/routes/products/New"
import Featured from "./components/routes/products/Featured"
import Users from "./components/routes/Users"
import UserDetails from "./components/routes/UserDetails"
import UseContext from "./hooks/UseContext"
import { User } from "./hooks/User"

export const MyContext = createContext("")

export interface I {
    v: number,
    setting: Function,
    getting: Function
}

const App = () => {
    const [count, setCount] = useState(0)
    const value: I = {
        v: 10,
        setting() {
            setCount((prevState) => prevState + 1)
        },
        getting() {
            return count
        }
    }
    return (
        <MyContext.Provider value={value}>
            {/* <div className="App">
                <h2>Hooks</h2>
                <UseState />
                <UseEffect />
            </div>
            <UseContext />
            <UseReducer /> */}
            {/* <CustomHook /> */}
            <UseContext />
            <User />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />}>
                    <Route index element={<Featured />} />
                    {/* OR, but 👆🏾, in the tutorial. */}
                    <Route path="" element={<Featured />} />
                    <Route path="featured" element={<Featured />} />
                    <Route path="new" element={<New />} />
                </Route>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<UserDetails />} />
                {/* "*"" Matches is no other route match the passed route. */}
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </MyContext.Provider>
        // <>
        // <Navbar />
        // <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/home" element={<Home />} />
        //     <Route path="/about" element={<About />} />
        //     <Route path="/contact" element={<Contact />} />
        //     <Route path="/products" element={<Products />}>
        //         <Route index element={<Featured />} />
        //         {/* OR, but 👆🏾, in the tutorial. */}
        //         <Route path="" element={<Featured />} />
        //         <Route path="featured" element={<Featured />} />
        //         <Route path="new" element={<New />} />
        //     </Route>
        //     <Route path="/users" element={<Users />} />
        //     <Route path="/users/:userId" element={<UserDetails />} />
        //     {/* "*"" Matches is no other route match the passed route. */}
        //     <Route path="*" element={<NoMatch />} />
        // </Routes>
        // </>
    )
}

export default App