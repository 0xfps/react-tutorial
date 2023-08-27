const ChildComponent = (props: any) => {
    return (
        <button
            className="button"
            onClick={props.handler}
        >
            Child Click Button
        </button>
    )
}

export default ChildComponent