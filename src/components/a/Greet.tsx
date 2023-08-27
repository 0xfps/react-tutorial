import sayHello from "./sayHello"

const Greet = (props: any) => {
    return (
        <div>
            <h1>{sayHello(props.name)} aka {props.heroname} 😎!</h1>
            {props.children}
        </div>
    )
}

export const increment = (num: number) => {
    return ++num
}

export default Greet