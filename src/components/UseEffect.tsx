import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    return (
        <div>Count {count}</div>
    )
}

export default UseEffect