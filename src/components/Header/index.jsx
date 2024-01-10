import './styles.css'

const Header = (props) => {
    return (
        <header className='my-header'>
            <h1>Hola Mundo!</h1>
            <h2>Este es mi componente header en React</h2>
            <h4>hoy es {props.currentDate}</h4>
        </header>
    )
}

export default Header