import { useEffect } from "react"


const useDocumentTitle = (mycounter: any) => {
    useEffect(() => {
        document.title = `You clicked ${mycounter} times!`
    }, [mycounter])
}

export default useDocumentTitle