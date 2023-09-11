import { createContext } from "react"
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

export const MyContext = createContext("")

const App = () => {
    return (
        // <MyContext.Provider value="This is great!">
        //     {/* <div className="App">
        //         <h2>Hooks</h2>
        //         <UseState />
        //         <UseEffect />
        //     </div>
        //     <UseContext />
        //     <UseReducer /> */}
        //     <CustomHook />
        // </MyContext.Provider>
        <>
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
        </>
    )
}

export default App