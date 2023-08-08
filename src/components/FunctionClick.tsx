const clickHandler = () => {
    console.log("Button clicked!")
}

const FunctionClick = () => {
    return (
        <button
            className="button"
            onClick={clickHandler}
        >
            Click Handler
        </button>
    )
}

export default FunctionClick