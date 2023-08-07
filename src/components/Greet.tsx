import sayHello from "./sayHello"

const Greet = () => {
    return <h1>{sayHello("Anthony")} 😎!</h1>
}

export const increment = (num: number) => {
    return ++num
}

export default Greet