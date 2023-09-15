// @ts-nocheck
import React, { Suspense } from "react"
import { createContext, useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/routes/Home"
// import { About } from "./components/routes/About"
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
import CustomHook from "./hooks/CustomHook"
import Profile from "./components/routes/Profile"
const About = React.lazy(() => import("./components/routes/About"))
import { useNavigate } from "react-router-dom"

export const MyContext = createContext("")

export interface I {
    v: number,
    isLoggedIn: boolean,
    setting: Function,
    getting: Function
}

const App = () => {
    const [count, setCount] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const value: I = {
        v: 10,
        isLoggedIn: isLoggedIn,
        setting() {
            setCount((prevState) => prevState + 1)
        },
        getting() {
            return count
        },
        login() {
            setIsLoggedIn(true)
            localStorage.setItem("isLoggedIn", true)
        },
        logout() {
            setIsLoggedIn(false)
            localStorage.setItem("isLoggedIn", false)
            navigate("/")
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

            <User />
            <Navbar />
            <CustomHook />
            <CustomHook />
            <CustomHook />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Suspense fallback="loading"><About /></Suspense>} />
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
                <Route path="profile" element={<Profile />} />
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