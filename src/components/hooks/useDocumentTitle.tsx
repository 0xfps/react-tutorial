// @ts-nocheck
import { useState, useEffect } from "react"

const useDocumentTitle = (mycounter: any) => {
    const [a, setA] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${mycounter} times!`
        // @ts-ignore
        setA((prevState) => prevState + 1)
    }, [mycounter])

    return a
}

export default useDocumentTitle