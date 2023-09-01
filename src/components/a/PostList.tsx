import axios from "axios"
import { useEffect, useState } from "react"

const PostList = () => {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((data) => {
                setPosts(data.data)
                console.log(posts)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            {
                // posts.map((v, i, a) => {
                //     return <p key={i}>{v}</p>
                // })
            }
        </div>
    )
}

export default PostList