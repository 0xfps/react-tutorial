import styles from "../css/Styles.module.css"

const head = {
    fontSize: "100px",
    color: "blue"
}

const StyleComponent = (props: any) => {
    let className = props.primary ? "primary" : ""
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
            <h1 style={head}>Stylesheets</h1>
            <h1 className={styles.error}>Stylesheets</h1>
        </div>
    )
}


export default StyleComponent