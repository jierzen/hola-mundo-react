import './styles.css'

const Footer = (props) => {
    return (

        <footer className="my-footer">
            {props.children}
            Footer de la pagina (created by {props.author})
        </footer>
    )
}

export default Footer