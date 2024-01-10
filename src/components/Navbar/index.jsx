import './styles.css'

const Navbar = ({ links }) => {
    return(
        <nav className="my-nav">
            <ul>
                {
                    links.map((link,index) => (
                        //si link.name es unico puedes usarlo como key directamente
                        <li key={index}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar