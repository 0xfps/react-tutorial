import { useEffect, useState } from "react"
import useDocumentTitle from "../components/hooks/useDocumentTitle"

const CustomHook = () => {
    const [mycounter, setCount] = useState(0)

    useDocumentTitle(mycounter)

    return (
        <>
            <input type="text" autoFocus />
            <button onClick={() => setCount(c => c + 1)}>
                Clicked {mycounter}
            </button>
        </>
    )
}

export default CustomHook